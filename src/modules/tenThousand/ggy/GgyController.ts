import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggies")
export default class GgyController {
  @operation({
    summary: "Get Ggies",
  })
  @get()
  static getGgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggy",
  })
  @post("{id}")
  static createGgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
