import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqs")
export default class AqsController {
  @operation({
    summary: "Get Aqs",
  })
  @get()
  static getAqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqs",
  })
  @post("{id}")
  static createAqs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
