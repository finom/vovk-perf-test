import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwv")
export default class JwvController {
  @operation({
    summary: "Get Jwv",
  })
  @get()
  static getJwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwv",
  })
  @post("{id}")
  static createJwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
