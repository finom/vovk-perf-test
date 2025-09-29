import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvas")
export default class GvaController {
  @operation({
    summary: "Get Gvas",
  })
  @get()
  static getGvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gva",
  })
  @post("{id}")
  static createGva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
