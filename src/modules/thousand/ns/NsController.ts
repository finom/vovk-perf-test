import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ns")
export default class NsController {
  @operation({
    summary: "Get Ns",
  })
  @get()
  static getNs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ns",
  })
  @post("{id}")
  static createNs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
