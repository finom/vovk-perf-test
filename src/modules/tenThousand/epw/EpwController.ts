import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epws")
export default class EpwController {
  @operation({
    summary: "Get Epws",
  })
  @get()
  static getEpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epw",
  })
  @post("{id}")
  static createEpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
