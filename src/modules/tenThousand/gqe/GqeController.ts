import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqes")
export default class GqeController {
  @operation({
    summary: "Get Gqes",
  })
  @get()
  static getGqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqe",
  })
  @post("{id}")
  static createGqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
