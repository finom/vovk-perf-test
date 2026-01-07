import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkl")
export default class GklController {
  @operation({
    summary: "Get Gkl",
  })
  @get()
  static getGkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkl",
  })
  @post("{id}")
  static createGkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
