import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmt")
export default class NmtController {
  @operation({
    summary: "Get Nmt",
  })
  @get()
  static getNmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmt",
  })
  @post("{id}")
  static createNmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
