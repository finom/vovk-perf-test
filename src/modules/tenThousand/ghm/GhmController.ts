import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghms")
export default class GhmController {
  @operation({
    summary: "Get Ghms",
  })
  @get()
  static getGhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghm",
  })
  @post("{id}")
  static createGhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
