import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isis")
export default class IsiController {
  @operation({
    summary: "Get Isis",
  })
  @get()
  static getIsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isi",
  })
  @post("{id}")
  static createIsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
