import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gucs")
export default class GucController {
  @operation({
    summary: "Get Gucs",
  })
  @get()
  static getGucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guc",
  })
  @post("{id}")
  static createGuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
