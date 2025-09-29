import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kries")
export default class KryController {
  @operation({
    summary: "Get Kries",
  })
  @get()
  static getKries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kry",
  })
  @post("{id}")
  static createKry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
