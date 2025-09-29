import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahis")
export default class AhiController {
  @operation({
    summary: "Get Ahis",
  })
  @get()
  static getAhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahi",
  })
  @post("{id}")
  static createAhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
