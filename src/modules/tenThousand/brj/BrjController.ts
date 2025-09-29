import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brjs")
export default class BrjController {
  @operation({
    summary: "Get Brjs",
  })
  @get()
  static getBrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brj",
  })
  @post("{id}")
  static createBrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
