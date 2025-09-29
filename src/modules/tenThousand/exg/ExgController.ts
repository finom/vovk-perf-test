import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exgs")
export default class ExgController {
  @operation({
    summary: "Get Exgs",
  })
  @get()
  static getExgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exg",
  })
  @post("{id}")
  static createExg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
