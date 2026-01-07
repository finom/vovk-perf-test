import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
