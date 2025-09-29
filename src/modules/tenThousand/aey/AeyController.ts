import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeys")
export default class AeyController {
  @operation({
    summary: "Get Aeys",
  })
  @get()
  static getAeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aey",
  })
  @post("{id}")
  static createAey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
