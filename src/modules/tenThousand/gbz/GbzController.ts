import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbz")
export default class GbzController {
  @operation({
    summary: "Get Gbz",
  })
  @get()
  static getGbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbz",
  })
  @post("{id}")
  static createGbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
