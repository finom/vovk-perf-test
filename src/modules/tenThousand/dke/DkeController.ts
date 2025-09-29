import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkes")
export default class DkeController {
  @operation({
    summary: "Get Dkes",
  })
  @get()
  static getDkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dke",
  })
  @post("{id}")
  static createDke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
