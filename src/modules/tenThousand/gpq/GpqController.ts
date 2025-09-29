import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpqs")
export default class GpqController {
  @operation({
    summary: "Get Gpqs",
  })
  @get()
  static getGpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpq",
  })
  @post("{id}")
  static createGpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
