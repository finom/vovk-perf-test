import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmes")
export default class KmeController {
  @operation({
    summary: "Get Kmes",
  })
  @get()
  static getKmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kme",
  })
  @post("{id}")
  static createKme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
