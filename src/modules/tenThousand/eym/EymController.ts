import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyms")
export default class EymController {
  @operation({
    summary: "Get Eyms",
  })
  @get()
  static getEyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eym",
  })
  @post("{id}")
  static createEym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
