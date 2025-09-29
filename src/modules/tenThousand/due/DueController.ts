import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dues")
export default class DueController {
  @operation({
    summary: "Get Dues",
  })
  @get()
  static getDues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Due",
  })
  @post("{id}")
  static createDue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
