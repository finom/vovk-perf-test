import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("becs")
export default class BecController {
  @operation({
    summary: "Get Becs",
  })
  @get()
  static getBecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bec",
  })
  @post("{id}")
  static createBec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
