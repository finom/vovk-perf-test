import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxls")
export default class KxlController {
  @operation({
    summary: "Get Kxls",
  })
  @get()
  static getKxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxl",
  })
  @post("{id}")
  static createKxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
