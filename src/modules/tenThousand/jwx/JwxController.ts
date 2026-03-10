import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwx")
export default class JwxController {
  @operation({
    summary: "Get Jwx",
  })
  @get()
  static getJwx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwx",
  })
  @post("{id}")
  static createJwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
