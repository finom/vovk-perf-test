import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gybs")
export default class GybController {
  @operation({
    summary: "Get Gybs",
  })
  @get()
  static getGybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyb",
  })
  @post("{id}")
  static createGyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
