import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggz")
export default class GgzController {
  @operation({
    summary: "Get Ggz",
  })
  @get()
  static getGgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggz",
  })
  @post("{id}")
  static createGgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
