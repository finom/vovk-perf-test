import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edqs")
export default class EdqController {
  @operation({
    summary: "Get Edqs",
  })
  @get()
  static getEdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edq",
  })
  @post("{id}")
  static createEdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
