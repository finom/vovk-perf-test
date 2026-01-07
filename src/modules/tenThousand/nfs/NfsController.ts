import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfs")
export default class NfsController {
  @operation({
    summary: "Get Nfs",
  })
  @get()
  static getNfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfs",
  })
  @post("{id}")
  static createNfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
