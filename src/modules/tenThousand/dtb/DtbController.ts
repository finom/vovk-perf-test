import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtb")
export default class DtbController {
  @operation({
    summary: "Get Dtb",
  })
  @get()
  static getDtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtb",
  })
  @post("{id}")
  static createDtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
