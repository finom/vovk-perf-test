import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezts")
export default class EztController {
  @operation({
    summary: "Get Ezts",
  })
  @get()
  static getEzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezt",
  })
  @post("{id}")
  static createEzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
