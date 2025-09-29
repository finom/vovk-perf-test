import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kods")
export default class KodController {
  @operation({
    summary: "Get Kods",
  })
  @get()
  static getKods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kod",
  })
  @post("{id}")
  static createKod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
