import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("urs")
export default class UrController {
  @operation({
    summary: "Get Urs",
  })
  @get()
  static getUrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ur",
  })
  @post("{id}")
  static createUr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
