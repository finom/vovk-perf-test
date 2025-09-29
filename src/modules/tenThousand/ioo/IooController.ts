import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ioos")
export default class IooController {
  @operation({
    summary: "Get Ioos",
  })
  @get()
  static getIoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioo",
  })
  @post("{id}")
  static createIoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
