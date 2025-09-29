import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqms")
export default class KqmController {
  @operation({
    summary: "Get Kqms",
  })
  @get()
  static getKqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqm",
  })
  @post("{id}")
  static createKqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
