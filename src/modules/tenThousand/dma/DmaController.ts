import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dma")
export default class DmaController {
  @operation({
    summary: "Get Dma",
  })
  @get()
  static getDma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dma",
  })
  @post("{id}")
  static createDma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
