import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqrs")
export default class GqrController {
  @operation({
    summary: "Get Gqrs",
  })
  @get()
  static getGqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqr",
  })
  @post("{id}")
  static createGqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
