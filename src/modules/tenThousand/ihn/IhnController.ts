import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihns")
export default class IhnController {
  @operation({
    summary: "Get Ihns",
  })
  @get()
  static getIhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihn",
  })
  @post("{id}")
  static createIhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
