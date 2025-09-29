import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flrs")
export default class FlrController {
  @operation({
    summary: "Get Flrs",
  })
  @get()
  static getFlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flr",
  })
  @post("{id}")
  static createFlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
