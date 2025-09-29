import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cins")
export default class CinController {
  @operation({
    summary: "Get Cins",
  })
  @get()
  static getCins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cin",
  })
  @post("{id}")
  static createCin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
