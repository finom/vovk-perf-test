import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgj")
export default class LgjController {
  @operation({
    summary: "Get Lgj",
  })
  @get()
  static getLgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgj",
  })
  @post("{id}")
  static createLgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
