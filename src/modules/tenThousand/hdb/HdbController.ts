import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdbs")
export default class HdbController {
  @operation({
    summary: "Get Hdbs",
  })
  @get()
  static getHdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdb",
  })
  @post("{id}")
  static createHdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
