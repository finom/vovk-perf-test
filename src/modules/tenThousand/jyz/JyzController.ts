import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyzs")
export default class JyzController {
  @operation({
    summary: "Get Jyzs",
  })
  @get()
  static getJyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyz",
  })
  @post("{id}")
  static createJyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
