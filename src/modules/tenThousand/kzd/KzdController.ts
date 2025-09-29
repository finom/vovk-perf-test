import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzds")
export default class KzdController {
  @operation({
    summary: "Get Kzds",
  })
  @get()
  static getKzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzd",
  })
  @post("{id}")
  static createKzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
