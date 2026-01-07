import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnz")
export default class FnzController {
  @operation({
    summary: "Get Fnz",
  })
  @get()
  static getFnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnz",
  })
  @post("{id}")
  static createFnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
