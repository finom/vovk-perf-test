import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwz")
export default class JwzController {
  @operation({
    summary: "Get Jwz",
  })
  @get()
  static getJwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwz",
  })
  @post("{id}")
  static createJwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
