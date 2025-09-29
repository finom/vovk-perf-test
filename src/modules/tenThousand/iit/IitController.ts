import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iits")
export default class IitController {
  @operation({
    summary: "Get Iits",
  })
  @get()
  static getIits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iit",
  })
  @post("{id}")
  static createIit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
