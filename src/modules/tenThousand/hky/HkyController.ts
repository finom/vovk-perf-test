import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hky")
export default class HkyController {
  @operation({
    summary: "Get Hky",
  })
  @get()
  static getHky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hky",
  })
  @post("{id}")
  static createHky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
