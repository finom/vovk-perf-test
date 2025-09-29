import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aads")
export default class AadController {
  @operation({
    summary: "Get Aads",
  })
  @get()
  static getAads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aad",
  })
  @post("{id}")
  static createAad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
