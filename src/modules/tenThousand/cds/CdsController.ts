import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cds")
export default class CdsController {
  @operation({
    summary: "Get Cds",
  })
  @get()
  static getCds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cds",
  })
  @post("{id}")
  static createCds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
