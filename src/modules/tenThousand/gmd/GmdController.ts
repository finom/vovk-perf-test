import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmd")
export default class GmdController {
  @operation({
    summary: "Get Gmd",
  })
  @get()
  static getGmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmd",
  })
  @post("{id}")
  static createGmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
