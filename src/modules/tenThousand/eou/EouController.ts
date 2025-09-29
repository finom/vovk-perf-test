import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eous")
export default class EouController {
  @operation({
    summary: "Get Eous",
  })
  @get()
  static getEous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eou",
  })
  @post("{id}")
  static createEou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
