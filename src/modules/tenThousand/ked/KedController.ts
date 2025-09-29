import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keds")
export default class KedController {
  @operation({
    summary: "Get Keds",
  })
  @get()
  static getKeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ked",
  })
  @post("{id}")
  static createKed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
