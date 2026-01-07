import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmp")
export default class JmpController {
  @operation({
    summary: "Get Jmp",
  })
  @get()
  static getJmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmp",
  })
  @post("{id}")
  static createJmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
