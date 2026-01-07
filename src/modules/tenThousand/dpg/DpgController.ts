import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpg")
export default class DpgController {
  @operation({
    summary: "Get Dpg",
  })
  @get()
  static getDpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpg",
  })
  @post("{id}")
  static createDpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
