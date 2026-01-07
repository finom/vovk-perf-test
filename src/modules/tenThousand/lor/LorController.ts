import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lor")
export default class LorController {
  @operation({
    summary: "Get Lor",
  })
  @get()
  static getLor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lor",
  })
  @post("{id}")
  static createLor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
