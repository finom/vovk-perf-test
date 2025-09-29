import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exls")
export default class ExlController {
  @operation({
    summary: "Get Exls",
  })
  @get()
  static getExls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exl",
  })
  @post("{id}")
  static createExl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
