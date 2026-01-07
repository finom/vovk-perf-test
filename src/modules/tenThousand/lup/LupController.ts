import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lup")
export default class LupController {
  @operation({
    summary: "Get Lup",
  })
  @get()
  static getLup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lup",
  })
  @post("{id}")
  static createLup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
