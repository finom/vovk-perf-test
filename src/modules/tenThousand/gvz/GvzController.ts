import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvz")
export default class GvzController {
  @operation({
    summary: "Get Gvz",
  })
  @get()
  static getGvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvz",
  })
  @post("{id}")
  static createGvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
