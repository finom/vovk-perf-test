import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bris")
export default class BriController {
  @operation({
    summary: "Get Bris",
  })
  @get()
  static getBris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bri",
  })
  @post("{id}")
  static createBri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
