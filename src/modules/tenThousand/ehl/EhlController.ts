import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehls")
export default class EhlController {
  @operation({
    summary: "Get Ehls",
  })
  @get()
  static getEhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehl",
  })
  @post("{id}")
  static createEhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
