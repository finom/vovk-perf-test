import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmf")
export default class MmfController {
  @operation({
    summary: "Get Mmf",
  })
  @get()
  static getMmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmf",
  })
  @post("{id}")
  static createMmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
