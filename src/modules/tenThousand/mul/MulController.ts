import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mul")
export default class MulController {
  @operation({
    summary: "Get Mul",
  })
  @get()
  static getMul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mul",
  })
  @post("{id}")
  static createMul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
