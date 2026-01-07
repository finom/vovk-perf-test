import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxy")
export default class GxyController {
  @operation({
    summary: "Get Gxy",
  })
  @get()
  static getGxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxy",
  })
  @post("{id}")
  static createGxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
