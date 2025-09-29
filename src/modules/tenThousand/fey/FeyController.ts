import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feys")
export default class FeyController {
  @operation({
    summary: "Get Feys",
  })
  @get()
  static getFeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fey",
  })
  @post("{id}")
  static createFey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
