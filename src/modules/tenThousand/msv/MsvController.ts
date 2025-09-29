import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msvs")
export default class MsvController {
  @operation({
    summary: "Get Msvs",
  })
  @get()
  static getMsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msv",
  })
  @post("{id}")
  static createMsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
