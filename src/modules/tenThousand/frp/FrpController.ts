import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frp")
export default class FrpController {
  @operation({
    summary: "Get Frp",
  })
  @get()
  static getFrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frp",
  })
  @post("{id}")
  static createFrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
