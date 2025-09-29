import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blns")
export default class BlnController {
  @operation({
    summary: "Get Blns",
  })
  @get()
  static getBlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bln",
  })
  @post("{id}")
  static createBln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
