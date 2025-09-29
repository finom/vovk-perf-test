import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hahs")
export default class HahController {
  @operation({
    summary: "Get Hahs",
  })
  @get()
  static getHahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hah",
  })
  @post("{id}")
  static createHah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
