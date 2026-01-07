import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etr")
export default class EtrController {
  @operation({
    summary: "Get Etr",
  })
  @get()
  static getEtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etr",
  })
  @post("{id}")
  static createEtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
