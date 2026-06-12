import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jww")
export default class JwwController {
  @operation({
    summary: "Get Jww",
  })
  @get()
  static getJww = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jww",
  })
  @post("{id}")
  static createJww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
