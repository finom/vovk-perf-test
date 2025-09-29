import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kogs")
export default class KogController {
  @operation({
    summary: "Get Kogs",
  })
  @get()
  static getKogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kog",
  })
  @post("{id}")
  static createKog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
