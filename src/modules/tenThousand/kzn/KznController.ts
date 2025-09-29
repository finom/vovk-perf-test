import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzns")
export default class KznController {
  @operation({
    summary: "Get Kzns",
  })
  @get()
  static getKzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzn",
  })
  @post("{id}")
  static createKzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
