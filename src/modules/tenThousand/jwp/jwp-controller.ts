import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwp")
export default class JwpController {
  @operation({
    summary: "Get Jwp",
  })
  @get()
  static getJwp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwp",
  })
  @post("{id}")
  static createJwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
