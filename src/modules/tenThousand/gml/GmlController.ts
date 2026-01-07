import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gml")
export default class GmlController {
  @operation({
    summary: "Get Gml",
  })
  @get()
  static getGml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gml",
  })
  @post("{id}")
  static createGml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
