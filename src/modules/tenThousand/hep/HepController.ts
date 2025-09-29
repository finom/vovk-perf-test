import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heps")
export default class HepController {
  @operation({
    summary: "Get Heps",
  })
  @get()
  static getHeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hep",
  })
  @post("{id}")
  static createHep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
