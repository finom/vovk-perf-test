import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmh")
export default class MmhController {
  @operation({
    summary: "Get Mmh",
  })
  @get()
  static getMmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmh",
  })
  @post("{id}")
  static createMmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
