import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuns")
export default class IunController {
  @operation({
    summary: "Get Iuns",
  })
  @get()
  static getIuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iun",
  })
  @post("{id}")
  static createIun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
