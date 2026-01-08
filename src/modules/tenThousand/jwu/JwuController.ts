import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwu")
export default class JwuController {
  @operation({
    summary: "Get Jwu",
  })
  @get()
  static getJwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwu",
  })
  @post("{id}")
  static createJwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
