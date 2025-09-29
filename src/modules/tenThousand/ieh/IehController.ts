import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iehs")
export default class IehController {
  @operation({
    summary: "Get Iehs",
  })
  @get()
  static getIehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ieh",
  })
  @post("{id}")
  static createIeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
