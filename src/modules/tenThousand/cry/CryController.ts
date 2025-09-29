import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cries")
export default class CryController {
  @operation({
    summary: "Get Cries",
  })
  @get()
  static getCries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cry",
  })
  @post("{id}")
  static createCry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
