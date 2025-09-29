import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ohs")
export default class OhController {
  @operation({
    summary: "Get Ohs",
  })
  @get()
  static getOhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oh",
  })
  @post("{id}")
  static createOh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
