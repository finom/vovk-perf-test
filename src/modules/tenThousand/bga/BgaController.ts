import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bga")
export default class BgaController {
  @operation({
    summary: "Get Bga",
  })
  @get()
  static getBga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bga",
  })
  @post("{id}")
  static createBga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
