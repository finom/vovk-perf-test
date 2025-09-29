import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekes")
export default class EkeController {
  @operation({
    summary: "Get Ekes",
  })
  @get()
  static getEkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eke",
  })
  @post("{id}")
  static createEke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
