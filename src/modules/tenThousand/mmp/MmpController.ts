import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmp")
export default class MmpController {
  @operation({
    summary: "Get Mmp",
  })
  @get()
  static getMmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmp",
  })
  @post("{id}")
  static createMmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
