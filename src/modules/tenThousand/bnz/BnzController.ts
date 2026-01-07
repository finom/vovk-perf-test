import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnz")
export default class BnzController {
  @operation({
    summary: "Get Bnz",
  })
  @get()
  static getBnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnz",
  })
  @post("{id}")
  static createBnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
