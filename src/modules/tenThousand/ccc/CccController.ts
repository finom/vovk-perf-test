import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cccs")
export default class CccController {
  @operation({
    summary: "Get Cccs",
  })
  @get()
  static getCccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccc",
  })
  @post("{id}")
  static createCcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
