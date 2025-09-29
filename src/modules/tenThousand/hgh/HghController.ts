import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hghs")
export default class HghController {
  @operation({
    summary: "Get Hghs",
  })
  @get()
  static getHghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgh",
  })
  @post("{id}")
  static createHgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
