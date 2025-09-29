import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gofs")
export default class GofController {
  @operation({
    summary: "Get Gofs",
  })
  @get()
  static getGofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gof",
  })
  @post("{id}")
  static createGof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
