import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhf")
export default class NhfController {
  @operation({
    summary: "Get Nhf",
  })
  @get()
  static getNhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhf",
  })
  @post("{id}")
  static createNhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
