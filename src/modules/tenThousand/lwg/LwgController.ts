import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwg")
export default class LwgController {
  @operation({
    summary: "Get Lwg",
  })
  @get()
  static getLwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwg",
  })
  @post("{id}")
  static createLwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
