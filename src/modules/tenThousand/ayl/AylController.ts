import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayls")
export default class AylController {
  @operation({
    summary: "Get Ayls",
  })
  @get()
  static getAyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayl",
  })
  @post("{id}")
  static createAyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
