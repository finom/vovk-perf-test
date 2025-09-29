import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyas")
export default class IyaController {
  @operation({
    summary: "Get Iyas",
  })
  @get()
  static getIyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iya",
  })
  @post("{id}")
  static createIya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
