import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctg")
export default class CtgController {
  @operation({
    summary: "Get Ctg",
  })
  @get()
  static getCtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctg",
  })
  @post("{id}")
  static createCtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
