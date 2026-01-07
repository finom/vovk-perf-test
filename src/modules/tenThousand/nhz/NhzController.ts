import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhz")
export default class NhzController {
  @operation({
    summary: "Get Nhz",
  })
  @get()
  static getNhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhz",
  })
  @post("{id}")
  static createNhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
