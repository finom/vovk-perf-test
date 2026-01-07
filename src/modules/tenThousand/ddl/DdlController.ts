import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddl")
export default class DdlController {
  @operation({
    summary: "Get Ddl",
  })
  @get()
  static getDdl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddl",
  })
  @post("{id}")
  static createDdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
