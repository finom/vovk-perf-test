import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msis")
export default class MsiController {
  @operation({
    summary: "Get Msis",
  })
  @get()
  static getMsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msi",
  })
  @post("{id}")
  static createMsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
