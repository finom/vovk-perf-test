import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivl")
export default class IvlController {
  @operation({
    summary: "Get Ivl",
  })
  @get()
  static getIvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivl",
  })
  @post("{id}")
  static createIvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
