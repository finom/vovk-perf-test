import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihms")
export default class IhmController {
  @operation({
    summary: "Get Ihms",
  })
  @get()
  static getIhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihm",
  })
  @post("{id}")
  static createIhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
