import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgis")
export default class CgiController {
  @operation({
    summary: "Get Cgis",
  })
  @get()
  static getCgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgi",
  })
  @post("{id}")
  static createCgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
