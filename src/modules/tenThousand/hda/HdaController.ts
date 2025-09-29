import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdas")
export default class HdaController {
  @operation({
    summary: "Get Hdas",
  })
  @get()
  static getHdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hda",
  })
  @post("{id}")
  static createHda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
