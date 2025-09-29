import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eits")
export default class EitController {
  @operation({
    summary: "Get Eits",
  })
  @get()
  static getEits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eit",
  })
  @post("{id}")
  static createEit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
