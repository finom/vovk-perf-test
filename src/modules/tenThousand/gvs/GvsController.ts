import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvs")
export default class GvsController {
  @operation({
    summary: "Get Gvs",
  })
  @get()
  static getGvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvs",
  })
  @post("{id}")
  static createGvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
