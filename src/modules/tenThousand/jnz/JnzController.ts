import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnz")
export default class JnzController {
  @operation({
    summary: "Get Jnz",
  })
  @get()
  static getJnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnz",
  })
  @post("{id}")
  static createJnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
