import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lws")
export default class LwsController {
  @operation({
    summary: "Get Lws",
  })
  @get()
  static getLws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lws",
  })
  @post("{id}")
  static createLws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
