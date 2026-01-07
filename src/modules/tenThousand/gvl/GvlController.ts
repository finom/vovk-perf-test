import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvl")
export default class GvlController {
  @operation({
    summary: "Get Gvl",
  })
  @get()
  static getGvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvl",
  })
  @post("{id}")
  static createGvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
