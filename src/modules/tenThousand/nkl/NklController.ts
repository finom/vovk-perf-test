import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkl")
export default class NklController {
  @operation({
    summary: "Get Nkl",
  })
  @get()
  static getNkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkl",
  })
  @post("{id}")
  static createNkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
