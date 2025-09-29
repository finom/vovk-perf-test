import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("beys")
export default class BeyController {
  @operation({
    summary: "Get Beys",
  })
  @get()
  static getBeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bey",
  })
  @post("{id}")
  static createBey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
