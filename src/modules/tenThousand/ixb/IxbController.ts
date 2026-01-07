import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixb")
export default class IxbController {
  @operation({
    summary: "Get Ixb",
  })
  @get()
  static getIxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixb",
  })
  @post("{id}")
  static createIxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
