import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmp")
export default class LmpController {
  @operation({
    summary: "Get Lmp",
  })
  @get()
  static getLmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmp",
  })
  @post("{id}")
  static createLmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
