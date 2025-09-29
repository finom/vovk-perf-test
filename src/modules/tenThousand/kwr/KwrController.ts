import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwrs")
export default class KwrController {
  @operation({
    summary: "Get Kwrs",
  })
  @get()
  static getKwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwr",
  })
  @post("{id}")
  static createKwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
