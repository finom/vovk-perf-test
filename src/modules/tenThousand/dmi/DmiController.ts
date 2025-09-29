import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmis")
export default class DmiController {
  @operation({
    summary: "Get Dmis",
  })
  @get()
  static getDmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmi",
  })
  @post("{id}")
  static createDmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
