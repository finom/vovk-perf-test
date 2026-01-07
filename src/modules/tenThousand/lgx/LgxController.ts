import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgx")
export default class LgxController {
  @operation({
    summary: "Get Lgx",
  })
  @get()
  static getLgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgx",
  })
  @post("{id}")
  static createLgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
