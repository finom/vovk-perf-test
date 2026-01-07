import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bms")
export default class BmsController {
  @operation({
    summary: "Get Bms",
  })
  @get()
  static getBms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bms",
  })
  @post("{id}")
  static createBms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
