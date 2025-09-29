import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kties")
export default class KtyController {
  @operation({
    summary: "Get Kties",
  })
  @get()
  static getKties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kty",
  })
  @post("{id}")
  static createKty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
