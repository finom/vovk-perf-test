import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjos")
export default class FjoController {
  @operation({
    summary: "Get Fjos",
  })
  @get()
  static getFjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjo",
  })
  @post("{id}")
  static createFjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
