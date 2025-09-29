import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzcs")
export default class BzcController {
  @operation({
    summary: "Get Bzcs",
  })
  @get()
  static getBzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzc",
  })
  @post("{id}")
  static createBzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
