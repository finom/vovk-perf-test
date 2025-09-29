import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elzs")
export default class ElzController {
  @operation({
    summary: "Get Elzs",
  })
  @get()
  static getElzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elz",
  })
  @post("{id}")
  static createElz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
