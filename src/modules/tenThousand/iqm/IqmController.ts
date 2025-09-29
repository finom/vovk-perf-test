import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqms")
export default class IqmController {
  @operation({
    summary: "Get Iqms",
  })
  @get()
  static getIqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqm",
  })
  @post("{id}")
  static createIqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
