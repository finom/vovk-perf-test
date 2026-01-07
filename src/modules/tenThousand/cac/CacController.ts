import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cac")
export default class CacController {
  @operation({
    summary: "Get Cac",
  })
  @get()
  static getCac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cac",
  })
  @post("{id}")
  static createCac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
