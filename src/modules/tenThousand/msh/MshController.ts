import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mshes")
export default class MshController {
  @operation({
    summary: "Get Mshes",
  })
  @get()
  static getMshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msh",
  })
  @post("{id}")
  static createMsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
