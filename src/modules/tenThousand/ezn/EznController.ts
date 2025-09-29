import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezns")
export default class EznController {
  @operation({
    summary: "Get Ezns",
  })
  @get()
  static getEzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezn",
  })
  @post("{id}")
  static createEzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
