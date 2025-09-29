import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jons")
export default class JonController {
  @operation({
    summary: "Get Jons",
  })
  @get()
  static getJons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jon",
  })
  @post("{id}")
  static createJon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
