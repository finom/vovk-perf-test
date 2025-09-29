import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keus")
export default class KeuController {
  @operation({
    summary: "Get Keus",
  })
  @get()
  static getKeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Keu",
  })
  @post("{id}")
  static createKeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
