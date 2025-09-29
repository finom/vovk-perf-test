import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjes")
export default class KjeController {
  @operation({
    summary: "Get Kjes",
  })
  @get()
  static getKjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kje",
  })
  @post("{id}")
  static createKje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
