import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kys")
export default class KysController {
  @operation({
    summary: "Get Kys",
  })
  @get()
  static getKys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kys",
  })
  @post("{id}")
  static createKys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
