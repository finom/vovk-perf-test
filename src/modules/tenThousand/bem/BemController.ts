import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bem")
export default class BemController {
  @operation({
    summary: "Get Bem",
  })
  @get()
  static getBem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bem",
  })
  @post("{id}")
  static createBem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
