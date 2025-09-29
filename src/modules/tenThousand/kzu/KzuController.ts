import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzus")
export default class KzuController {
  @operation({
    summary: "Get Kzus",
  })
  @get()
  static getKzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzu",
  })
  @post("{id}")
  static createKzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
