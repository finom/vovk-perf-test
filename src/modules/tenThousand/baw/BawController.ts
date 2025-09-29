import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("baws")
export default class BawController {
  @operation({
    summary: "Get Baws",
  })
  @get()
  static getBaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Baw",
  })
  @post("{id}")
  static createBaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
