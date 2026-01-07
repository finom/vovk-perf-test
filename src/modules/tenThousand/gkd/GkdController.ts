import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkd")
export default class GkdController {
  @operation({
    summary: "Get Gkd",
  })
  @get()
  static getGkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkd",
  })
  @post("{id}")
  static createGkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
