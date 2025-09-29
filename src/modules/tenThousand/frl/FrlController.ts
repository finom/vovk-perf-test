import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frls")
export default class FrlController {
  @operation({
    summary: "Get Frls",
  })
  @get()
  static getFrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frl",
  })
  @post("{id}")
  static createFrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
