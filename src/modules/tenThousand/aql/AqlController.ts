import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqls")
export default class AqlController {
  @operation({
    summary: "Get Aqls",
  })
  @get()
  static getAqls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aql",
  })
  @post("{id}")
  static createAql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
