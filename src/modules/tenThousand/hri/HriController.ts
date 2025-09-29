import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hris")
export default class HriController {
  @operation({
    summary: "Get Hris",
  })
  @get()
  static getHris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hri",
  })
  @post("{id}")
  static createHri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
