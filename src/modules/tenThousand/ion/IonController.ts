import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ions")
export default class IonController {
  @operation({
    summary: "Get Ions",
  })
  @get()
  static getIons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ion",
  })
  @post("{id}")
  static createIon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
