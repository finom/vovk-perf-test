import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asm")
export default class AsmController {
  @operation({
    summary: "Get Asm",
  })
  @get()
  static getAsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asm",
  })
  @post("{id}")
  static createAsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
