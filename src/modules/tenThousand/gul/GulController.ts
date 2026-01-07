import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gul")
export default class GulController {
  @operation({
    summary: "Get Gul",
  })
  @get()
  static getGul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gul",
  })
  @post("{id}")
  static createGul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
