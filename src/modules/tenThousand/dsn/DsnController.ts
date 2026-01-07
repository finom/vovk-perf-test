import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsn")
export default class DsnController {
  @operation({
    summary: "Get Dsn",
  })
  @get()
  static getDsn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsn",
  })
  @post("{id}")
  static createDsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
