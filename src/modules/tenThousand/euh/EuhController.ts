import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euhs")
export default class EuhController {
  @operation({
    summary: "Get Euhs",
  })
  @get()
  static getEuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euh",
  })
  @post("{id}")
  static createEuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
