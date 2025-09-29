import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivjs")
export default class IvjController {
  @operation({
    summary: "Get Ivjs",
  })
  @get()
  static getIvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivj",
  })
  @post("{id}")
  static createIvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
