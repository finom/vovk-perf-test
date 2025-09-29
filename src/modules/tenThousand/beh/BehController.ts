import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("behs")
export default class BehController {
  @operation({
    summary: "Get Behs",
  })
  @get()
  static getBehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Beh",
  })
  @post("{id}")
  static createBeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
