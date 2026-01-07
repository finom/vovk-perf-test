import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idw")
export default class IdwController {
  @operation({
    summary: "Get Idw",
  })
  @get()
  static getIdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idw",
  })
  @post("{id}")
  static createIdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
