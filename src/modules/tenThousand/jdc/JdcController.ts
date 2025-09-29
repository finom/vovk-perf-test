import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdcs")
export default class JdcController {
  @operation({
    summary: "Get Jdcs",
  })
  @get()
  static getJdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdc",
  })
  @post("{id}")
  static createJdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
