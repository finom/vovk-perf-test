import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjs")
export default class FjsController {
  @operation({
    summary: "Get Fjs",
  })
  @get()
  static getFjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjs",
  })
  @post("{id}")
  static createFjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
