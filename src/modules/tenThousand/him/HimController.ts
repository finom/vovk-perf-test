import { procedure, prefix, get, post, operation } from "vovk";

@prefix("him")
export default class HimController {
  @operation({
    summary: "Get Him",
  })
  @get()
  static getHim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Him",
  })
  @post("{id}")
  static createHim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
