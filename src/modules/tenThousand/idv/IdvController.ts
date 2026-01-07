import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idv")
export default class IdvController {
  @operation({
    summary: "Get Idv",
  })
  @get()
  static getIdv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idv",
  })
  @post("{id}")
  static createIdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
