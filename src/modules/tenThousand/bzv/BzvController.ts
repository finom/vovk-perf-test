import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzvs")
export default class BzvController {
  @operation({
    summary: "Get Bzvs",
  })
  @get()
  static getBzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzv",
  })
  @post("{id}")
  static createBzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
