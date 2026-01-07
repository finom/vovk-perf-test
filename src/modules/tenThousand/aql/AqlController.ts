import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aql")
export default class AqlController {
  @operation({
    summary: "Get Aql",
  })
  @get()
  static getAql = procedure({
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
