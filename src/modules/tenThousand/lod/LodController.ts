import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lod")
export default class LodController {
  @operation({
    summary: "Get Lod",
  })
  @get()
  static getLod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lod",
  })
  @post("{id}")
  static createLod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
