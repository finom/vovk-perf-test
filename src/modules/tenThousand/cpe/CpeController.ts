import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpes")
export default class CpeController {
  @operation({
    summary: "Get Cpes",
  })
  @get()
  static getCpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpe",
  })
  @post("{id}")
  static createCpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
