import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bly")
export default class BlyController {
  @operation({
    summary: "Get Bly",
  })
  @get()
  static getBly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bly",
  })
  @post("{id}")
  static createBly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
