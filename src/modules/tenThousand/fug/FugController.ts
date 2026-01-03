import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fugs")
export default class FugController {
  @operation({
    summary: "Get Fugs",
  })
  @get()
  static getFugs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fug",
  })
  @post("{id}")
  static createFug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
