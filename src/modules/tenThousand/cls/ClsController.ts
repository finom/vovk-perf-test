import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cls")
export default class ClsController {
  @operation({
    summary: "Get Cls",
  })
  @get()
  static getCls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cls",
  })
  @post("{id}")
  static createCls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
