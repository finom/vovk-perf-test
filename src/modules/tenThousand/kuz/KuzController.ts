import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuzs")
export default class KuzController {
  @operation({
    summary: "Get Kuzs",
  })
  @get()
  static getKuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuz",
  })
  @post("{id}")
  static createKuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
