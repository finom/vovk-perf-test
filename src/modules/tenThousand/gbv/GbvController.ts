import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbv")
export default class GbvController {
  @operation({
    summary: "Get Gbv",
  })
  @get()
  static getGbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbv",
  })
  @post("{id}")
  static createGbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
