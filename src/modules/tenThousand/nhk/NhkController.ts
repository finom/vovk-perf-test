import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhk")
export default class NhkController {
  @operation({
    summary: "Get Nhk",
  })
  @get()
  static getNhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhk",
  })
  @post("{id}")
  static createNhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
