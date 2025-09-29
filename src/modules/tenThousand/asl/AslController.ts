import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asls")
export default class AslController {
  @operation({
    summary: "Get Asls",
  })
  @get()
  static getAsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asl",
  })
  @post("{id}")
  static createAsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
