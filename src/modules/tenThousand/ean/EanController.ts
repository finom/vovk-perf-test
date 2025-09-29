import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eans")
export default class EanController {
  @operation({
    summary: "Get Eans",
  })
  @get()
  static getEans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ean",
  })
  @post("{id}")
  static createEan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
