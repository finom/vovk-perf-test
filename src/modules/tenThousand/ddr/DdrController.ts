import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddr")
export default class DdrController {
  @operation({
    summary: "Get Ddr",
  })
  @get()
  static getDdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddr",
  })
  @post("{id}")
  static createDdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
