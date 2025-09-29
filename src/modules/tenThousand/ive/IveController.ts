import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ives")
export default class IveController {
  @operation({
    summary: "Get Ives",
  })
  @get()
  static getIves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ive",
  })
  @post("{id}")
  static createIve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
