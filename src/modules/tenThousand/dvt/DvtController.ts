import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvt")
export default class DvtController {
  @operation({
    summary: "Get Dvt",
  })
  @get()
  static getDvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvt",
  })
  @post("{id}")
  static createDvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
