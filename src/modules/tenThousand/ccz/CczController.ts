import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cczs")
export default class CczController {
  @operation({
    summary: "Get Cczs",
  })
  @get()
  static getCczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccz",
  })
  @post("{id}")
  static createCcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
