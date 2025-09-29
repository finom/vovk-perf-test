import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grzs")
export default class GrzController {
  @operation({
    summary: "Get Grzs",
  })
  @get()
  static getGrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grz",
  })
  @post("{id}")
  static createGrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
