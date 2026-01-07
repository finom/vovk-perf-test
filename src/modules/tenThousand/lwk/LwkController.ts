import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwk")
export default class LwkController {
  @operation({
    summary: "Get Lwk",
  })
  @get()
  static getLwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwk",
  })
  @post("{id}")
  static createLwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
