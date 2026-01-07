import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsi")
export default class DsiController {
  @operation({
    summary: "Get Dsi",
  })
  @get()
  static getDsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsi",
  })
  @post("{id}")
  static createDsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
