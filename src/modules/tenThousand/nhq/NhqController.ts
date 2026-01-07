import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhq")
export default class NhqController {
  @operation({
    summary: "Get Nhq",
  })
  @get()
  static getNhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhq",
  })
  @post("{id}")
  static createNhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
