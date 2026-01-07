import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imm")
export default class ImmController {
  @operation({
    summary: "Get Imm",
  })
  @get()
  static getImm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imm",
  })
  @post("{id}")
  static createImm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
