import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqfs")
export default class GqfController {
  @operation({
    summary: "Get Gqfs",
  })
  @get()
  static getGqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqf",
  })
  @post("{id}")
  static createGqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
