import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euus")
export default class EuuController {
  @operation({
    summary: "Get Euus",
  })
  @get()
  static getEuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euu",
  })
  @post("{id}")
  static createEuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
