import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idgs")
export default class IdgController {
  @operation({
    summary: "Get Idgs",
  })
  @get()
  static getIdgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idg",
  })
  @post("{id}")
  static createIdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
