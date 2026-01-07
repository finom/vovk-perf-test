import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhw")
export default class NhwController {
  @operation({
    summary: "Get Nhw",
  })
  @get()
  static getNhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhw",
  })
  @post("{id}")
  static createNhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
