import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjbs")
export default class GjbController {
  @operation({
    summary: "Get Gjbs",
  })
  @get()
  static getGjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjb",
  })
  @post("{id}")
  static createGjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
