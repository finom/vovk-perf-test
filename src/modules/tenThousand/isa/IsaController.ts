import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isa")
export default class IsaController {
  @operation({
    summary: "Get Isa",
  })
  @get()
  static getIsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isa",
  })
  @post("{id}")
  static createIsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
