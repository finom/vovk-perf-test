import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ioxen")
export default class IoxController {
  @operation({
    summary: "Get Ioxen",
  })
  @get()
  static getIoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iox",
  })
  @post("{id}")
  static createIox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
