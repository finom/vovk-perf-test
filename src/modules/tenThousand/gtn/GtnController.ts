import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtn")
export default class GtnController {
  @operation({
    summary: "Get Gtn",
  })
  @get()
  static getGtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtn",
  })
  @post("{id}")
  static createGtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
