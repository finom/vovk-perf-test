import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asbs")
export default class AsbController {
  @operation({
    summary: "Get Asbs",
  })
  @get()
  static getAsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asb",
  })
  @post("{id}")
  static createAsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
