import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsds")
export default class BsdController {
  @operation({
    summary: "Get Bsds",
  })
  @get()
  static getBsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsd",
  })
  @post("{id}")
  static createBsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
