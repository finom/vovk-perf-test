import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrzs")
export default class HrzController {
  @operation({
    summary: "Get Hrzs",
  })
  @get()
  static getHrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrz",
  })
  @post("{id}")
  static createHrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
