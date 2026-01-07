import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgv")
export default class LgvController {
  @operation({
    summary: "Get Lgv",
  })
  @get()
  static getLgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgv",
  })
  @post("{id}")
  static createLgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
