import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmis")
export default class GmiController {
  @operation({
    summary: "Get Gmis",
  })
  @get()
  static getGmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmi",
  })
  @post("{id}")
  static createGmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
