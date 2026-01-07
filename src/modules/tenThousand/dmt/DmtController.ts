import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmt")
export default class DmtController {
  @operation({
    summary: "Get Dmt",
  })
  @get()
  static getDmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmt",
  })
  @post("{id}")
  static createDmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
