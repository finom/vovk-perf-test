import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmas")
export default class DmaController {
  @operation({
    summary: "Get Dmas",
  })
  @get()
  static getDmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dma",
  })
  @post("{id}")
  static createDma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
