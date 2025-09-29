import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dris")
export default class DriController {
  @operation({
    summary: "Get Dris",
  })
  @get()
  static getDris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dri",
  })
  @post("{id}")
  static createDri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
