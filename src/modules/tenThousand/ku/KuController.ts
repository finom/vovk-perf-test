import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kus")
export default class KuController {
  @operation({
    summary: "Get Kus",
  })
  @get()
  static getKus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ku",
  })
  @post("{id}")
  static createKu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
