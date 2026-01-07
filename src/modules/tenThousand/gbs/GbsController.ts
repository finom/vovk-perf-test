import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbs")
export default class GbsController {
  @operation({
    summary: "Get Gbs",
  })
  @get()
  static getGbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbs",
  })
  @post("{id}")
  static createGbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
