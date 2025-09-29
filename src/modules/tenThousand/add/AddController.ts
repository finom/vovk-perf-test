import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adds")
export default class AddController {
  @operation({
    summary: "Get Adds",
  })
  @get()
  static getAdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Add",
  })
  @post("{id}")
  static createAdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
