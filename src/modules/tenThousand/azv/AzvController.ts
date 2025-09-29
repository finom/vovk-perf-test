import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azvs")
export default class AzvController {
  @operation({
    summary: "Get Azvs",
  })
  @get()
  static getAzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azv",
  })
  @post("{id}")
  static createAzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
