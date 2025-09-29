import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hggs")
export default class HggController {
  @operation({
    summary: "Get Hggs",
  })
  @get()
  static getHggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgg",
  })
  @post("{id}")
  static createHgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
