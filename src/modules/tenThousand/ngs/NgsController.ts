import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngs")
export default class NgsController {
  @operation({
    summary: "Get Ngs",
  })
  @get()
  static getNgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngs",
  })
  @post("{id}")
  static createNgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
