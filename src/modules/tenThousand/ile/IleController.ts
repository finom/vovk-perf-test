import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iles")
export default class IleController {
  @operation({
    summary: "Get Iles",
  })
  @get()
  static getIles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ile",
  })
  @post("{id}")
  static createIle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
