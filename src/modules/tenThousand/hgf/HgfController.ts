import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgfs")
export default class HgfController {
  @operation({
    summary: "Get Hgfs",
  })
  @get()
  static getHgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgf",
  })
  @post("{id}")
  static createHgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
