import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clas")
export default class ClaController {
  @operation({
    summary: "Get Clas",
  })
  @get()
  static getClas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cla",
  })
  @post("{id}")
  static createCla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
