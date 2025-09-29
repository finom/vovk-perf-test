import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cugs")
export default class CugController {
  @operation({
    summary: "Get Cugs",
  })
  @get()
  static getCugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cug",
  })
  @post("{id}")
  static createCug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
