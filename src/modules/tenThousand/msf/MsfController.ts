import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msfs")
export default class MsfController {
  @operation({
    summary: "Get Msfs",
  })
  @get()
  static getMsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msf",
  })
  @post("{id}")
  static createMsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
