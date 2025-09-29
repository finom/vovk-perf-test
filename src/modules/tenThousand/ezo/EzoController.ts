import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezos")
export default class EzoController {
  @operation({
    summary: "Get Ezos",
  })
  @get()
  static getEzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezo",
  })
  @post("{id}")
  static createEzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
