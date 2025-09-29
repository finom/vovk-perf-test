import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klos")
export default class KloController {
  @operation({
    summary: "Get Klos",
  })
  @get()
  static getKlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klo",
  })
  @post("{id}")
  static createKlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
