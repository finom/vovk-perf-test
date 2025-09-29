import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dius")
export default class DiuController {
  @operation({
    summary: "Get Dius",
  })
  @get()
  static getDius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Diu",
  })
  @post("{id}")
  static createDiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
