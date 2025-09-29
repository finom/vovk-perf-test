import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acies")
export default class AcyController {
  @operation({
    summary: "Get Acies",
  })
  @get()
  static getAcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acy",
  })
  @post("{id}")
  static createAcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
