import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvus")
export default class DvuController {
  @operation({
    summary: "Get Dvus",
  })
  @get()
  static getDvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvu",
  })
  @post("{id}")
  static createDvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
