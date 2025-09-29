import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgds")
export default class HgdController {
  @operation({
    summary: "Get Hgds",
  })
  @get()
  static getHgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgd",
  })
  @post("{id}")
  static createHgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
