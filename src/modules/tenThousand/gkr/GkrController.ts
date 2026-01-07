import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkr")
export default class GkrController {
  @operation({
    summary: "Get Gkr",
  })
  @get()
  static getGkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkr",
  })
  @post("{id}")
  static createGkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
