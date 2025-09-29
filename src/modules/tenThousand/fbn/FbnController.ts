import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbns")
export default class FbnController {
  @operation({
    summary: "Get Fbns",
  })
  @get()
  static getFbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbn",
  })
  @post("{id}")
  static createFbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
