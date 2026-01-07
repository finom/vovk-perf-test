import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mef")
export default class MefController {
  @operation({
    summary: "Get Mef",
  })
  @get()
  static getMef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mef",
  })
  @post("{id}")
  static createMef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
