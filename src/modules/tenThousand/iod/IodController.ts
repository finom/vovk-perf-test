import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iods")
export default class IodController {
  @operation({
    summary: "Get Iods",
  })
  @get()
  static getIods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iod",
  })
  @post("{id}")
  static createIod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
