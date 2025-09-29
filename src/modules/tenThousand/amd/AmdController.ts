import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amds")
export default class AmdController {
  @operation({
    summary: "Get Amds",
  })
  @get()
  static getAmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amd",
  })
  @post("{id}")
  static createAmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
