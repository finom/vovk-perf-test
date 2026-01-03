import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgis")
export default class CgiController {
  @operation({
    summary: "Get Cgis",
  })
  @get()
  static getCgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgi",
  })
  @post("{id}")
  static createCgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
