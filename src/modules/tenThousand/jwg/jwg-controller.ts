import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwg")
export default class JwgController {
  @operation({
    summary: "Get Jwg",
  })
  @get()
  static getJwg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwg",
  })
  @post("{id}")
  static createJwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
