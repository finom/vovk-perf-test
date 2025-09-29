import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deys")
export default class DeyController {
  @operation({
    summary: "Get Deys",
  })
  @get()
  static getDeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dey",
  })
  @post("{id}")
  static createDey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
