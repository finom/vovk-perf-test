import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkas")
export default class DkaController {
  @operation({
    summary: "Get Dkas",
  })
  @get()
  static getDkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dka",
  })
  @post("{id}")
  static createDka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
