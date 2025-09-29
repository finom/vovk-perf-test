import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iafs")
export default class IafController {
  @operation({
    summary: "Get Iafs",
  })
  @get()
  static getIafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iaf",
  })
  @post("{id}")
  static createIaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
