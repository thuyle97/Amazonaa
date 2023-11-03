export default function SigninScreen() {
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
        <h1 className="my-3">Sign In</h1>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Sign In</Button>
          </div>
        </Form>
      </Helmet>
    </Container>
  );
}
