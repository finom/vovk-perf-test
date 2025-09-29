import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fghs")
export default class FghController {
  @operation({
    summary: "Get Fghs",
  })
  @get()
  static getFghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgh",
  })
  @post("{id}")
  static createFgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
