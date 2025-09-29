import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aays")
export default class AayController {
  @operation({
    summary: "Get Aays",
  })
  @get()
  static getAays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aay",
  })
  @post("{id}")
  static createAay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
