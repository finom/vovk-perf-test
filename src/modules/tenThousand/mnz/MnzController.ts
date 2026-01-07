import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnz")
export default class MnzController {
  @operation({
    summary: "Get Mnz",
  })
  @get()
  static getMnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnz",
  })
  @post("{id}")
  static createMnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
