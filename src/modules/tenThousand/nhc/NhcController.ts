import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhc")
export default class NhcController {
  @operation({
    summary: "Get Nhc",
  })
  @get()
  static getNhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhc",
  })
  @post("{id}")
  static createNhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
