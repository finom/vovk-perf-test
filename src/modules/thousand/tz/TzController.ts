import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tzs")
export default class TzController {
  @operation({
    summary: "Get Tzs",
  })
  @get()
  static getTzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tz",
  })
  @post("{id}")
  static createTz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
