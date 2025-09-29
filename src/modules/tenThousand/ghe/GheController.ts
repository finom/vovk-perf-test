import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghes")
export default class GheController {
  @operation({
    summary: "Get Ghes",
  })
  @get()
  static getGhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghe",
  })
  @post("{id}")
  static createGhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
