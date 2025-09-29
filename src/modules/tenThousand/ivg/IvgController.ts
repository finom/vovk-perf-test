import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivgs")
export default class IvgController {
  @operation({
    summary: "Get Ivgs",
  })
  @get()
  static getIvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivg",
  })
  @post("{id}")
  static createIvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
