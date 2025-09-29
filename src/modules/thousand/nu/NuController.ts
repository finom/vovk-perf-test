import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nus")
export default class NuController {
  @operation({
    summary: "Get Nus",
  })
  @get()
  static getNus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nu",
  })
  @post("{id}")
  static createNu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
