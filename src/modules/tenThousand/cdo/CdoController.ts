import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdo")
export default class CdoController {
  @operation({
    summary: "Get Cdo",
  })
  @get()
  static getCdo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdo",
  })
  @post("{id}")
  static createCdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
