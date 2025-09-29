import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqrs")
export default class HqrController {
  @operation({
    summary: "Get Hqrs",
  })
  @get()
  static getHqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqr",
  })
  @post("{id}")
  static createHqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
