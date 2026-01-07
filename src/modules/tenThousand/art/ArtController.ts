import { procedure, prefix, get, post, operation } from "vovk";

@prefix("art")
export default class ArtController {
  @operation({
    summary: "Get Art",
  })
  @get()
  static getArt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Art",
  })
  @post("{id}")
  static createArt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
