import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iors")
export default class IorController {
  @operation({
    summary: "Get Iors",
  })
  @get()
  static getIors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ior",
  })
  @post("{id}")
  static createIor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
