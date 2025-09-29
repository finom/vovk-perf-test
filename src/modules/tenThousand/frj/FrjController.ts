import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frjs")
export default class FrjController {
  @operation({
    summary: "Get Frjs",
  })
  @get()
  static getFrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frj",
  })
  @post("{id}")
  static createFrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
