import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aob")
export default class AobController {
  @operation({
    summary: "Get Aob",
  })
  @get()
  static getAob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aob",
  })
  @post("{id}")
  static createAob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
