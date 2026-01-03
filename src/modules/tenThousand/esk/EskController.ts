import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esks")
export default class EskController {
  @operation({
    summary: "Get Esks",
  })
  @get()
  static getEsks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esk",
  })
  @post("{id}")
  static createEsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
