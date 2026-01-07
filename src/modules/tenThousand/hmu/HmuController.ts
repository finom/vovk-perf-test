import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmu")
export default class HmuController {
  @operation({
    summary: "Get Hmu",
  })
  @get()
  static getHmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmu",
  })
  @post("{id}")
  static createHmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
