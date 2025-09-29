import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blgs")
export default class BlgController {
  @operation({
    summary: "Get Blgs",
  })
  @get()
  static getBlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blg",
  })
  @post("{id}")
  static createBlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
