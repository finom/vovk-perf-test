import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwl")
export default class JwlController {
  @operation({
    summary: "Get Jwl",
  })
  @get()
  static getJwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwl",
  })
  @post("{id}")
  static createJwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
