import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loj")
export default class LojController {
  @operation({
    summary: "Get Loj",
  })
  @get()
  static getLoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loj",
  })
  @post("{id}")
  static createLoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
