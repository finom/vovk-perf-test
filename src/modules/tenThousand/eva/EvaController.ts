import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evas")
export default class EvaController {
  @operation({
    summary: "Get Evas",
  })
  @get()
  static getEvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eva",
  })
  @post("{id}")
  static createEva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
