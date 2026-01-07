import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtt")
export default class MttController {
  @operation({
    summary: "Get Mtt",
  })
  @get()
  static getMtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtt",
  })
  @post("{id}")
  static createMtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
