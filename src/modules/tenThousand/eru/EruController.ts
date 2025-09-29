import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erus")
export default class EruController {
  @operation({
    summary: "Get Erus",
  })
  @get()
  static getErus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eru",
  })
  @post("{id}")
  static createEru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
