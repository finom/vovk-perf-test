import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mct")
export default class MctController {
  @operation({
    summary: "Get Mct",
  })
  @get()
  static getMct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mct",
  })
  @post("{id}")
  static createMct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
