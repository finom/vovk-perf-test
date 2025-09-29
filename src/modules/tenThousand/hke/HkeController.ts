import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkes")
export default class HkeController {
  @operation({
    summary: "Get Hkes",
  })
  @get()
  static getHkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hke",
  })
  @post("{id}")
  static createHke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
