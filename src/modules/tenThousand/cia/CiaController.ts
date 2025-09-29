import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cias")
export default class CiaController {
  @operation({
    summary: "Get Cias",
  })
  @get()
  static getCias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cia",
  })
  @post("{id}")
  static createCia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
