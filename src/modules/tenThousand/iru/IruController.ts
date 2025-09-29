import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irus")
export default class IruController {
  @operation({
    summary: "Get Irus",
  })
  @get()
  static getIrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iru",
  })
  @post("{id}")
  static createIru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
