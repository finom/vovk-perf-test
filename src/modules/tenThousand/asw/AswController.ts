import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asws")
export default class AswController {
  @operation({
    summary: "Get Asws",
  })
  @get()
  static getAsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asw",
  })
  @post("{id}")
  static createAsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
