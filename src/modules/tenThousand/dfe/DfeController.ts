import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfes")
export default class DfeController {
  @operation({
    summary: "Get Dfes",
  })
  @get()
  static getDfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfe",
  })
  @post("{id}")
  static createDfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
