import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxy")
export default class CxyController {
  @operation({
    summary: "Get Cxy",
  })
  @get()
  static getCxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxy",
  })
  @post("{id}")
  static createCxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
