import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilgs")
export default class IlgController {
  @operation({
    summary: "Get Ilgs",
  })
  @get()
  static getIlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilg",
  })
  @post("{id}")
  static createIlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
