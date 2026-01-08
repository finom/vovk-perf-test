import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jit")
export default class JitController {
  @operation({
    summary: "Get Jit",
  })
  @get()
  static getJit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jit",
  })
  @post("{id}")
  static createJit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
