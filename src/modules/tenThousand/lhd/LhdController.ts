import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhd")
export default class LhdController {
  @operation({
    summary: "Get Lhd",
  })
  @get()
  static getLhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhd",
  })
  @post("{id}")
  static createLhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
