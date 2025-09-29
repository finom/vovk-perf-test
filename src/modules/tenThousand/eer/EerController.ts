import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eers")
export default class EerController {
  @operation({
    summary: "Get Eers",
  })
  @get()
  static getEers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eer",
  })
  @post("{id}")
  static createEer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
