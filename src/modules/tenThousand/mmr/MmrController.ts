import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmr")
export default class MmrController {
  @operation({
    summary: "Get Mmr",
  })
  @get()
  static getMmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmr",
  })
  @post("{id}")
  static createMmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
