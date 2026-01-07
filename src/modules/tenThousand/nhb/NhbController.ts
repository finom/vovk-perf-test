import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhb")
export default class NhbController {
  @operation({
    summary: "Get Nhb",
  })
  @get()
  static getNhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhb",
  })
  @post("{id}")
  static createNhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
