import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhp")
export default class NhpController {
  @operation({
    summary: "Get Nhp",
  })
  @get()
  static getNhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhp",
  })
  @post("{id}")
  static createNhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
