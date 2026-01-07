import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foi")
export default class FoiController {
  @operation({
    summary: "Get Foi",
  })
  @get()
  static getFoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foi",
  })
  @post("{id}")
  static createFoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
