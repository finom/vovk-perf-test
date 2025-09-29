import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aws")
export default class AwController {
  @operation({
    summary: "Get Aws",
  })
  @get()
  static getAws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aw",
  })
  @post("{id}")
  static createAw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
