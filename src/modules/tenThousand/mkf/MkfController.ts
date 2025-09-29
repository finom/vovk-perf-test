import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkfs")
export default class MkfController {
  @operation({
    summary: "Get Mkfs",
  })
  @get()
  static getMkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkf",
  })
  @post("{id}")
  static createMkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
