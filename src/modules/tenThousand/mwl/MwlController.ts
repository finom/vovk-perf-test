import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwl")
export default class MwlController {
  @operation({
    summary: "Get Mwl",
  })
  @get()
  static getMwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwl",
  })
  @post("{id}")
  static createMwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
