import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcy")
export default class LcyController {
  @operation({
    summary: "Get Lcy",
  })
  @get()
  static getLcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcy",
  })
  @post("{id}")
  static createLcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
