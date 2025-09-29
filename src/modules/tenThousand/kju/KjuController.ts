import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjus")
export default class KjuController {
  @operation({
    summary: "Get Kjus",
  })
  @get()
  static getKjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kju",
  })
  @post("{id}")
  static createKju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
