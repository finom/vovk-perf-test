import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbi")
export default class GbiController {
  @operation({
    summary: "Get Gbi",
  })
  @get()
  static getGbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbi",
  })
  @post("{id}")
  static createGbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
