import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvs")
export default class DvsController {
  @operation({
    summary: "Get Dvs",
  })
  @get()
  static getDvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvs",
  })
  @post("{id}")
  static createDvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
