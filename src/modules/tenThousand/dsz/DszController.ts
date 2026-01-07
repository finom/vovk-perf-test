import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsz")
export default class DszController {
  @operation({
    summary: "Get Dsz",
  })
  @get()
  static getDsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsz",
  })
  @post("{id}")
  static createDsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
