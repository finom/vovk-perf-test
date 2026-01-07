import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkl")
export default class LklController {
  @operation({
    summary: "Get Lkl",
  })
  @get()
  static getLkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkl",
  })
  @post("{id}")
  static createLkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
