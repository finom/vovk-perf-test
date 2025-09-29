import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byqs")
export default class ByqController {
  @operation({
    summary: "Get Byqs",
  })
  @get()
  static getByqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byq",
  })
  @post("{id}")
  static createByq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
