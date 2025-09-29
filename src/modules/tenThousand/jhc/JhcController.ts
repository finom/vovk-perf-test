import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhcs")
export default class JhcController {
  @operation({
    summary: "Get Jhcs",
  })
  @get()
  static getJhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhc",
  })
  @post("{id}")
  static createJhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
