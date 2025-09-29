import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gies")
export default class GieController {
  @operation({
    summary: "Get Gies",
  })
  @get()
  static getGies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gie",
  })
  @post("{id}")
  static createGie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
