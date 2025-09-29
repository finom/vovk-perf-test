import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haws")
export default class HawController {
  @operation({
    summary: "Get Haws",
  })
  @get()
  static getHaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Haw",
  })
  @post("{id}")
  static createHaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
