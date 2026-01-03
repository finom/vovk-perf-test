import { procedure, prefix, get, post, operation } from "vovk";

@prefix("logs")
export default class LogController {
  @operation({
    summary: "Get Logs",
  })
  @get()
  static getLogs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Log",
  })
  @post("{id}")
  static createLog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
