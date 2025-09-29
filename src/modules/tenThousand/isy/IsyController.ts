import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isies")
export default class IsyController {
  @operation({
    summary: "Get Isies",
  })
  @get()
  static getIsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isy",
  })
  @post("{id}")
  static createIsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
