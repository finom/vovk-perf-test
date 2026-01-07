import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mds")
export default class MdsController {
  @operation({
    summary: "Get Mds",
  })
  @get()
  static getMds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mds",
  })
  @post("{id}")
  static createMds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
