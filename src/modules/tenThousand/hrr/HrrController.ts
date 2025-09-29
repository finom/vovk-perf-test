import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrrs")
export default class HrrController {
  @operation({
    summary: "Get Hrrs",
  })
  @get()
  static getHrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrr",
  })
  @post("{id}")
  static createHrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
