import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixu")
export default class IxuController {
  @operation({
    summary: "Get Ixu",
  })
  @get()
  static getIxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixu",
  })
  @post("{id}")
  static createIxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
