import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iogs")
export default class IogController {
  @operation({
    summary: "Get Iogs",
  })
  @get()
  static getIogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iog",
  })
  @post("{id}")
  static createIog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
