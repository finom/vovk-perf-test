import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwk")
export default class JwkController {
  @operation({
    summary: "Get Jwk",
  })
  @get()
  static getJwk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwk",
  })
  @post("{id}")
  static createJwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
