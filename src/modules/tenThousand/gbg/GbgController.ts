import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbg")
export default class GbgController {
  @operation({
    summary: "Get Gbg",
  })
  @get()
  static getGbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbg",
  })
  @post("{id}")
  static createGbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
