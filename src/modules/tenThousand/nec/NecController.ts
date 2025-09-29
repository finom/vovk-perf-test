import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("necs")
export default class NecController {
  @operation({
    summary: "Get Necs",
  })
  @get()
  static getNecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nec",
  })
  @post("{id}")
  static createNec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
