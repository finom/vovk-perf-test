import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yq")
export default class YqController {
  @operation({
    summary: "Get Yq",
  })
  @get()
  static getYq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yq",
  })
  @post("{id}")
  static createYq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
