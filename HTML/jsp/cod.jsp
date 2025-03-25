<%@ page import="java.sql.*" %>
<%
    String amount = request.getParameter("amount");
    int userId = 1; // 假设当前用户ID为1，实际应用中应从会话中获取

    Connection conn = null;
    PreparedStatement pstmt = null;

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/ecommerce", "root", "password");

        String sql = "INSERT INTO payments (user_id, amount) VALUES (?, ?)";
        pstmt = conn.prepareStatement(sql);
        pstmt.setInt(1, userId);
        pstmt.setString(2, amount);
        int result = pstmt.executeUpdate();

        if (result > 0) {
            out.print("success");
        } else {
            out.print("failure");
        }
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        if (pstmt != null) pstmt.close();
        if (conn != null) conn.close();
    }
%>