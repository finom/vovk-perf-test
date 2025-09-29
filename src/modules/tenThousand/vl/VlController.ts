import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vls")
export default class VlController {
  @operation({
    summary: "Get Vls",
  })
  @get()
  static getVls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vl",
  })
  @post("{id}")
  static createVl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
