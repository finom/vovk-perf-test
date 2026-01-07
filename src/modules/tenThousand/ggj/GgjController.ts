import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggj")
export default class GgjController {
  @operation({
    summary: "Get Ggj",
  })
  @get()
  static getGgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggj",
  })
  @post("{id}")
  static createGgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
