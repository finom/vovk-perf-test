import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naws")
export default class NawController {
  @operation({
    summary: "Get Naws",
  })
  @get()
  static getNaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Naw",
  })
  @post("{id}")
  static createNaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
