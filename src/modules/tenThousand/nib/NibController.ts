import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nibs")
export default class NibController {
  @operation({
    summary: "Get Nibs",
  })
  @get()
  static getNibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nib",
  })
  @post("{id}")
  static createNib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
