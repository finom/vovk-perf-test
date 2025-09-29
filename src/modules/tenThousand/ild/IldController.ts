import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilds")
export default class IldController {
  @operation({
    summary: "Get Ilds",
  })
  @get()
  static getIlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ild",
  })
  @post("{id}")
  static createIld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
