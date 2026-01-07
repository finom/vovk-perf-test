import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcs")
export default class McsController {
  @operation({
    summary: "Get Mcs",
  })
  @get()
  static getMcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcs",
  })
  @post("{id}")
  static createMcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
