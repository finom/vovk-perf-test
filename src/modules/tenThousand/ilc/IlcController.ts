import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilcs")
export default class IlcController {
  @operation({
    summary: "Get Ilcs",
  })
  @get()
  static getIlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilc",
  })
  @post("{id}")
  static createIlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
