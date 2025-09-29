import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("doxen")
export default class DoxController {
  @operation({
    summary: "Get Doxen",
  })
  @get()
  static getDoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dox",
  })
  @post("{id}")
  static createDox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
