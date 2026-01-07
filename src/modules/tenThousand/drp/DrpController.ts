import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drp")
export default class DrpController {
  @operation({
    summary: "Get Drp",
  })
  @get()
  static getDrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drp",
  })
  @post("{id}")
  static createDrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
