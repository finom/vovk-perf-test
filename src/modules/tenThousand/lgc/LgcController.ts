import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgc")
export default class LgcController {
  @operation({
    summary: "Get Lgc",
  })
  @get()
  static getLgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgc",
  })
  @post("{id}")
  static createLgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
