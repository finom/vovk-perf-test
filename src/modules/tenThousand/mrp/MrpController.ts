import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrp")
export default class MrpController {
  @operation({
    summary: "Get Mrp",
  })
  @get()
  static getMrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrp",
  })
  @post("{id}")
  static createMrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
