import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eras")
export default class EraController {
  @operation({
    summary: "Get Eras",
  })
  @get()
  static getEras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Era",
  })
  @post("{id}")
  static createEra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
