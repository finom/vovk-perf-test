import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dct")
export default class DctController {
  @operation({
    summary: "Get Dct",
  })
  @get()
  static getDct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dct",
  })
  @post("{id}")
  static createDct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
