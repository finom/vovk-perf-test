import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhm")
export default class NhmController {
  @operation({
    summary: "Get Nhm",
  })
  @get()
  static getNhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhm",
  })
  @post("{id}")
  static createNhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
