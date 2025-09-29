import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aems")
export default class AemController {
  @operation({
    summary: "Get Aems",
  })
  @get()
  static getAems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aem",
  })
  @post("{id}")
  static createAem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
