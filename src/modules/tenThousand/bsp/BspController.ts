import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsps")
export default class BspController {
  @operation({
    summary: "Get Bsps",
  })
  @get()
  static getBsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsp",
  })
  @post("{id}")
  static createBsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
