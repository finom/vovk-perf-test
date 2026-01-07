import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgq")
export default class LgqController {
  @operation({
    summary: "Get Lgq",
  })
  @get()
  static getLgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgq",
  })
  @post("{id}")
  static createLgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
