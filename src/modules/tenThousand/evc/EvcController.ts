import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evcs")
export default class EvcController {
  @operation({
    summary: "Get Evcs",
  })
  @get()
  static getEvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evc",
  })
  @post("{id}")
  static createEvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
