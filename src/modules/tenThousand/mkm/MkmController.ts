import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkms")
export default class MkmController {
  @operation({
    summary: "Get Mkms",
  })
  @get()
  static getMkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkm",
  })
  @post("{id}")
  static createMkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
