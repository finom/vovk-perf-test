import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dji")
export default class DjiController {
  @operation({
    summary: "Get Dji",
  })
  @get()
  static getDji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dji",
  })
  @post("{id}")
  static createDji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
