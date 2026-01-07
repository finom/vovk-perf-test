import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lot")
export default class LotController {
  @operation({
    summary: "Get Lot",
  })
  @get()
  static getLot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lot",
  })
  @post("{id}")
  static createLot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
