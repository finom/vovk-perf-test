import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azcs")
export default class AzcController {
  @operation({
    summary: "Get Azcs",
  })
  @get()
  static getAzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azc",
  })
  @post("{id}")
  static createAzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
