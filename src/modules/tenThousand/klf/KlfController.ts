import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klves")
export default class KlfController {
  @operation({
    summary: "Get Klves",
  })
  @get()
  static getKlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klf",
  })
  @post("{id}")
  static createKlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
