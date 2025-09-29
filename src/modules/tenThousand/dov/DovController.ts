import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dovs")
export default class DovController {
  @operation({
    summary: "Get Dovs",
  })
  @get()
  static getDovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dov",
  })
  @post("{id}")
  static createDov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
