import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwbs")
export default class KwbController {
  @operation({
    summary: "Get Kwbs",
  })
  @get()
  static getKwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwb",
  })
  @post("{id}")
  static createKwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
