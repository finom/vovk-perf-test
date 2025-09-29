import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("digs")
export default class DigController {
  @operation({
    summary: "Get Digs",
  })
  @get()
  static getDigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dig",
  })
  @post("{id}")
  static createDig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
