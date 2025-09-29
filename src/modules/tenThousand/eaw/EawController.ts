import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaws")
export default class EawController {
  @operation({
    summary: "Get Eaws",
  })
  @get()
  static getEaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eaw",
  })
  @post("{id}")
  static createEaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
