import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpas")
export default class JpaController {
  @operation({
    summary: "Get Jpas",
  })
  @get()
  static getJpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpa",
  })
  @post("{id}")
  static createJpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
