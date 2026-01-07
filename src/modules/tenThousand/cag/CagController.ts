import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cag")
export default class CagController {
  @operation({
    summary: "Get Cag",
  })
  @get()
  static getCag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cag",
  })
  @post("{id}")
  static createCag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
