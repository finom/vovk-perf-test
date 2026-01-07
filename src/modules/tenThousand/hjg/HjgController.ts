import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjg")
export default class HjgController {
  @operation({
    summary: "Get Hjg",
  })
  @get()
  static getHjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjg",
  })
  @post("{id}")
  static createHjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
