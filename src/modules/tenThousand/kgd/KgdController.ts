import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgds")
export default class KgdController {
  @operation({
    summary: "Get Kgds",
  })
  @get()
  static getKgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgd",
  })
  @post("{id}")
  static createKgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
