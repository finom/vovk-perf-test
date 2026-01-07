import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnz")
export default class HnzController {
  @operation({
    summary: "Get Hnz",
  })
  @get()
  static getHnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnz",
  })
  @post("{id}")
  static createHnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
