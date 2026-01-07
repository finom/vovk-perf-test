import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brp")
export default class BrpController {
  @operation({
    summary: "Get Brp",
  })
  @get()
  static getBrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brp",
  })
  @post("{id}")
  static createBrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
