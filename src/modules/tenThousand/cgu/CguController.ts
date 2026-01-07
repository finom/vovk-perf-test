import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgu")
export default class CguController {
  @operation({
    summary: "Get Cgu",
  })
  @get()
  static getCgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgu",
  })
  @post("{id}")
  static createCgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
