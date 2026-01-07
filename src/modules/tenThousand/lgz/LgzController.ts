import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgz")
export default class LgzController {
  @operation({
    summary: "Get Lgz",
  })
  @get()
  static getLgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgz",
  })
  @post("{id}")
  static createLgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
