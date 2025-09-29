import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjms")
export default class GjmController {
  @operation({
    summary: "Get Gjms",
  })
  @get()
  static getGjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjm",
  })
  @post("{id}")
  static createGjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
