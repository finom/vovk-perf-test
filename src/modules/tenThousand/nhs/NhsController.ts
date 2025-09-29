import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhs")
export default class NhsController {
  @operation({
    summary: "Get Nhs",
  })
  @get()
  static getNhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhs",
  })
  @post("{id}")
  static createNhs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
