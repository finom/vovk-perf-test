import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxx")
export default class CxxController {
  @operation({
    summary: "Get Cxx",
  })
  @get()
  static getCxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxx",
  })
  @post("{id}")
  static createCxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
