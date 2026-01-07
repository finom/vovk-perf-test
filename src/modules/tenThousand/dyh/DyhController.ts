import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyh")
export default class DyhController {
  @operation({
    summary: "Get Dyh",
  })
  @get()
  static getDyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyh",
  })
  @post("{id}")
  static createDyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
