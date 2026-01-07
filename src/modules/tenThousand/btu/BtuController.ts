import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btu")
export default class BtuController {
  @operation({
    summary: "Get Btu",
  })
  @get()
  static getBtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btu",
  })
  @post("{id}")
  static createBtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
