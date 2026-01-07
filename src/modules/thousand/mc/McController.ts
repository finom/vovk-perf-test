import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mc")
export default class McController {
  @operation({
    summary: "Get Mc",
  })
  @get()
  static getMc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mc",
  })
  @post("{id}")
  static createMc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
