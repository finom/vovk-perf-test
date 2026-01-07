import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftl")
export default class FtlController {
  @operation({
    summary: "Get Ftl",
  })
  @get()
  static getFtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftl",
  })
  @post("{id}")
  static createFtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
