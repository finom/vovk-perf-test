import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixq")
export default class IxqController {
  @operation({
    summary: "Get Ixq",
  })
  @get()
  static getIxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixq",
  })
  @post("{id}")
  static createIxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
