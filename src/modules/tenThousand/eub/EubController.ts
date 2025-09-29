import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eubs")
export default class EubController {
  @operation({
    summary: "Get Eubs",
  })
  @get()
  static getEubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eub",
  })
  @post("{id}")
  static createEub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
