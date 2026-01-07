import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkn")
export default class GknController {
  @operation({
    summary: "Get Gkn",
  })
  @get()
  static getGkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkn",
  })
  @post("{id}")
  static createGkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
