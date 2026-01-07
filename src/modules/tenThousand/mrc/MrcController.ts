import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrc")
export default class MrcController {
  @operation({
    summary: "Get Mrc",
  })
  @get()
  static getMrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrc",
  })
  @post("{id}")
  static createMrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
