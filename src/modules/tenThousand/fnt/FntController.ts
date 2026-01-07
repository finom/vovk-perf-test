import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnt")
export default class FntController {
  @operation({
    summary: "Get Fnt",
  })
  @get()
  static getFnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnt",
  })
  @post("{id}")
  static createFnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
