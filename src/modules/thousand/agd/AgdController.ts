import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agds")
export default class AgdController {
  @operation({
    summary: "Get Agds",
  })
  @get()
  static getAgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agd",
  })
  @post("{id}")
  static createAgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
