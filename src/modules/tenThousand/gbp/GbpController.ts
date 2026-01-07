import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbp")
export default class GbpController {
  @operation({
    summary: "Get Gbp",
  })
  @get()
  static getGbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbp",
  })
  @post("{id}")
  static createGbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
