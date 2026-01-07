import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhg")
export default class NhgController {
  @operation({
    summary: "Get Nhg",
  })
  @get()
  static getNhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhg",
  })
  @post("{id}")
  static createNhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
