import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnes")
export default class FneController {
  @operation({
    summary: "Get Fnes",
  })
  @get()
  static getFnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fne",
  })
  @post("{id}")
  static createFne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
