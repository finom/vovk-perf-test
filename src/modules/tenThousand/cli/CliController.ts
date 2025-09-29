import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clis")
export default class CliController {
  @operation({
    summary: "Get Clis",
  })
  @get()
  static getClis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cli",
  })
  @post("{id}")
  static createCli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
