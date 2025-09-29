import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqcs")
export default class GqcController {
  @operation({
    summary: "Get Gqcs",
  })
  @get()
  static getGqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqc",
  })
  @post("{id}")
  static createGqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
