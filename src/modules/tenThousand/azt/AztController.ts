import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azts")
export default class AztController {
  @operation({
    summary: "Get Azts",
  })
  @get()
  static getAzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azt",
  })
  @post("{id}")
  static createAzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
