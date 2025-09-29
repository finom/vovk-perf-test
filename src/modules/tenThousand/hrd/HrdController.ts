import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrds")
export default class HrdController {
  @operation({
    summary: "Get Hrds",
  })
  @get()
  static getHrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrd",
  })
  @post("{id}")
  static createHrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
