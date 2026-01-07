import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixj")
export default class IxjController {
  @operation({
    summary: "Get Ixj",
  })
  @get()
  static getIxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixj",
  })
  @post("{id}")
  static createIxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
