import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cck")
export default class CckController {
  @operation({
    summary: "Get Cck",
  })
  @get()
  static getCck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cck",
  })
  @post("{id}")
  static createCck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
