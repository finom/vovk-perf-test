import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcis")
export default class HciController {
  @operation({
    summary: "Get Hcis",
  })
  @get()
  static getHcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hci",
  })
  @post("{id}")
  static createHci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
