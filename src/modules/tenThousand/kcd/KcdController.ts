import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcds")
export default class KcdController {
  @operation({
    summary: "Get Kcds",
  })
  @get()
  static getKcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcd",
  })
  @post("{id}")
  static createKcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
