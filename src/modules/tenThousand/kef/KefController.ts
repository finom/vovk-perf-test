import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kefs")
export default class KefController {
  @operation({
    summary: "Get Kefs",
  })
  @get()
  static getKefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kef",
  })
  @post("{id}")
  static createKef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
