import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muxes")
export default class MuxController {
  @operation({
    summary: "Get Muxes",
  })
  @get()
  static getMuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mux",
  })
  @post("{id}")
  static createMux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
