import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igms")
export default class IgmController {
  @operation({
    summary: "Get Igms",
  })
  @get()
  static getIgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igm",
  })
  @post("{id}")
  static createIgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
