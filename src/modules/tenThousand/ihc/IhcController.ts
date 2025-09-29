import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihcs")
export default class IhcController {
  @operation({
    summary: "Get Ihcs",
  })
  @get()
  static getIhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihc",
  })
  @post("{id}")
  static createIhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
