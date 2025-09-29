import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asfs")
export default class AsfController {
  @operation({
    summary: "Get Asfs",
  })
  @get()
  static getAsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asf",
  })
  @post("{id}")
  static createAsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
