import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyxes")
export default class CyxController {
  @operation({
    summary: "Get Cyxes",
  })
  @get()
  static getCyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyx",
  })
  @post("{id}")
  static createCyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
