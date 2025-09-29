import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iries")
export default class IryController {
  @operation({
    summary: "Get Iries",
  })
  @get()
  static getIries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iry",
  })
  @post("{id}")
  static createIry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
