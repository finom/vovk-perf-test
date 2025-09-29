import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guhs")
export default class GuhController {
  @operation({
    summary: "Get Guhs",
  })
  @get()
  static getGuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guh",
  })
  @post("{id}")
  static createGuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
