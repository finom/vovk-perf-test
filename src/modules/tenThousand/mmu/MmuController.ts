import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmu")
export default class MmuController {
  @operation({
    summary: "Get Mmu",
  })
  @get()
  static getMmu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmu",
  })
  @post("{id}")
  static createMmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
