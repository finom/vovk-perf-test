import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtv")
export default class GtvController {
  @operation({
    summary: "Get Gtv",
  })
  @get()
  static getGtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtv",
  })
  @post("{id}")
  static createGtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
