import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikg")
export default class IkgController {
  @operation({
    summary: "Get Ikg",
  })
  @get()
  static getIkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikg",
  })
  @post("{id}")
  static createIkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
