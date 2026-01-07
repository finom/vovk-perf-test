import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lac")
export default class LacController {
  @operation({
    summary: "Get Lac",
  })
  @get()
  static getLac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lac",
  })
  @post("{id}")
  static createLac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
