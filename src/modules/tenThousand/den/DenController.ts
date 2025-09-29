import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dens")
export default class DenController {
  @operation({
    summary: "Get Dens",
  })
  @get()
  static getDens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Den",
  })
  @post("{id}")
  static createDen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
