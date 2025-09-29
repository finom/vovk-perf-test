import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhds")
export default class BhdController {
  @operation({
    summary: "Get Bhds",
  })
  @get()
  static getBhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhd",
  })
  @post("{id}")
  static createBhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
