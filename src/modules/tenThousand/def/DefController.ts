import { procedure, prefix, get, post, operation } from "vovk";

@prefix("def")
export default class DefController {
  @operation({
    summary: "Get Def",
  })
  @get()
  static getDef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Def",
  })
  @post("{id}")
  static createDef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
