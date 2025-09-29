import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkas")
export default class FkaController {
  @operation({
    summary: "Get Fkas",
  })
  @get()
  static getFkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fka",
  })
  @post("{id}")
  static createFka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
