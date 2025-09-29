import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsus")
export default class GsuController {
  @operation({
    summary: "Get Gsus",
  })
  @get()
  static getGsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsu",
  })
  @post("{id}")
  static createGsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
