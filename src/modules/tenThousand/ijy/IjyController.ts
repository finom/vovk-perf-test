import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijies")
export default class IjyController {
  @operation({
    summary: "Get Ijies",
  })
  @get()
  static getIjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijy",
  })
  @post("{id}")
  static createIjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
