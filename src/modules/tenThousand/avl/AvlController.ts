import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avl")
export default class AvlController {
  @operation({
    summary: "Get Avl",
  })
  @get()
  static getAvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avl",
  })
  @post("{id}")
  static createAvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
