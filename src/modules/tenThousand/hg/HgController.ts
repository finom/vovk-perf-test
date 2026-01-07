import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hg")
export default class HgController {
  @operation({
    summary: "Get Hg",
  })
  @get()
  static getHg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hg",
  })
  @post("{id}")
  static createHg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
