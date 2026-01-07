import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgk")
export default class LgkController {
  @operation({
    summary: "Get Lgk",
  })
  @get()
  static getLgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgk",
  })
  @post("{id}")
  static createLgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
