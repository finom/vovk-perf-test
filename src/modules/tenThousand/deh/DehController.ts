import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dehs")
export default class DehController {
  @operation({
    summary: "Get Dehs",
  })
  @get()
  static getDehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Deh",
  })
  @post("{id}")
  static createDeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
