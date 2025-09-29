import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzos")
export default class KzoController {
  @operation({
    summary: "Get Kzos",
  })
  @get()
  static getKzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzo",
  })
  @post("{id}")
  static createKzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
