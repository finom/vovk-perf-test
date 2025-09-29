import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezies")
export default class EzyController {
  @operation({
    summary: "Get Ezies",
  })
  @get()
  static getEzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezy",
  })
  @post("{id}")
  static createEzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
