import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eus")
export default class EuController {
  @operation({
    summary: "Get Eus",
  })
  @get()
  static getEus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eu",
  })
  @post("{id}")
  static createEu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
