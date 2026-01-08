import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnc")
export default class JncController {
  @operation({
    summary: "Get Jnc",
  })
  @get()
  static getJnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnc",
  })
  @post("{id}")
  static createJnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
