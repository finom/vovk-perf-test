import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmfs")
export default class JmfController {
  @operation({
    summary: "Get Jmfs",
  })
  @get()
  static getJmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmf",
  })
  @post("{id}")
  static createJmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
