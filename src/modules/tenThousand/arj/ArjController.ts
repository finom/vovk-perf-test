import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arj")
export default class ArjController {
  @operation({
    summary: "Get Arj",
  })
  @get()
  static getArj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arj",
  })
  @post("{id}")
  static createArj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
