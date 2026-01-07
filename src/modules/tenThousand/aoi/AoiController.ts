import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoi")
export default class AoiController {
  @operation({
    summary: "Get Aoi",
  })
  @get()
  static getAoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoi",
  })
  @post("{id}")
  static createAoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
