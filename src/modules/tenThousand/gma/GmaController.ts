import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmas")
export default class GmaController {
  @operation({
    summary: "Get Gmas",
  })
  @get()
  static getGmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gma",
  })
  @post("{id}")
  static createGma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
