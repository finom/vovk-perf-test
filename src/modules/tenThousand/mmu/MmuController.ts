import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmu")
export default class MmuController {
  @operation({
    summary: "Get Mmu",
  })
  @get()
  static getMmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmu",
  })
  @post("{id}")
  static createMmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
