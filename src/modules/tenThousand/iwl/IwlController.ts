import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwl")
export default class IwlController {
  @operation({
    summary: "Get Iwl",
  })
  @get()
  static getIwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwl",
  })
  @post("{id}")
  static createIwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
