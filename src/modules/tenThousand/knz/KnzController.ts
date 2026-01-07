import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knz")
export default class KnzController {
  @operation({
    summary: "Get Knz",
  })
  @get()
  static getKnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knz",
  })
  @post("{id}")
  static createKnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
