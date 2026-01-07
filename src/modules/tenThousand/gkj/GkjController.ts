import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkj")
export default class GkjController {
  @operation({
    summary: "Get Gkj",
  })
  @get()
  static getGkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkj",
  })
  @post("{id}")
  static createGkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
