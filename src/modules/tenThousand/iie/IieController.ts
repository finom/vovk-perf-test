import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iies")
export default class IieController {
  @operation({
    summary: "Get Iies",
  })
  @get()
  static getIies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iie",
  })
  @post("{id}")
  static createIie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
