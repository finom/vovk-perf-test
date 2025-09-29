import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idis")
export default class IdiController {
  @operation({
    summary: "Get Idis",
  })
  @get()
  static getIdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idi",
  })
  @post("{id}")
  static createIdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
