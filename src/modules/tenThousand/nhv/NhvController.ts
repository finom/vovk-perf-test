import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhv")
export default class NhvController {
  @operation({
    summary: "Get Nhv",
  })
  @get()
  static getNhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhv",
  })
  @post("{id}")
  static createNhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
