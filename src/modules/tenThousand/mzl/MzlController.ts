import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzl")
export default class MzlController {
  @operation({
    summary: "Get Mzl",
  })
  @get()
  static getMzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzl",
  })
  @post("{id}")
  static createMzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
