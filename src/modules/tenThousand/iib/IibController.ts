import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iibs")
export default class IibController {
  @operation({
    summary: "Get Iibs",
  })
  @get()
  static getIibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iib",
  })
  @post("{id}")
  static createIib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
