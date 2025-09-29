import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("logs")
export default class LogController {
  @operation({
    summary: "Get Logs",
  })
  @get()
  static getLogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Log",
  })
  @post("{id}")
  static createLog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
