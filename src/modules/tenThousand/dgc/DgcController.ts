import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgc")
export default class DgcController {
  @operation({
    summary: "Get Dgc",
  })
  @get()
  static getDgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgc",
  })
  @post("{id}")
  static createDgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
