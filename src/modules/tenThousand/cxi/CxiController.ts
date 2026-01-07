import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxi")
export default class CxiController {
  @operation({
    summary: "Get Cxi",
  })
  @get()
  static getCxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxi",
  })
  @post("{id}")
  static createCxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
