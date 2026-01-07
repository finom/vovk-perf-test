import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfe")
export default class CfeController {
  @operation({
    summary: "Get Cfe",
  })
  @get()
  static getCfe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfe",
  })
  @post("{id}")
  static createCfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
