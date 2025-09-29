import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxds")
export default class KxdController {
  @operation({
    summary: "Get Kxds",
  })
  @get()
  static getKxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxd",
  })
  @post("{id}")
  static createKxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
