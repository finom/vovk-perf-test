import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gni")
export default class GniController {
  @operation({
    summary: "Get Gni",
  })
  @get()
  static getGni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gni",
  })
  @post("{id}")
  static createGni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
