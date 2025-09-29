import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeus")
export default class EeuController {
  @operation({
    summary: "Get Eeus",
  })
  @get()
  static getEeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eeu",
  })
  @post("{id}")
  static createEeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
