import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhd")
export default class NhdController {
  @operation({
    summary: "Get Nhd",
  })
  @get()
  static getNhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhd",
  })
  @post("{id}")
  static createNhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
