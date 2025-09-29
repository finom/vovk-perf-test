import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgcs")
export default class HgcController {
  @operation({
    summary: "Get Hgcs",
  })
  @get()
  static getHgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgc",
  })
  @post("{id}")
  static createHgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
