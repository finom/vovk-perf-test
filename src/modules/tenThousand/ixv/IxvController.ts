import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixv")
export default class IxvController {
  @operation({
    summary: "Get Ixv",
  })
  @get()
  static getIxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixv",
  })
  @post("{id}")
  static createIxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
