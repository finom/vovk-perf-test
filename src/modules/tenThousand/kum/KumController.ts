import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kums")
export default class KumController {
  @operation({
    summary: "Get Kums",
  })
  @get()
  static getKums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kum",
  })
  @post("{id}")
  static createKum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
