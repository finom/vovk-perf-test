import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iers")
export default class IerController {
  @operation({
    summary: "Get Iers",
  })
  @get()
  static getIers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ier",
  })
  @post("{id}")
  static createIer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
