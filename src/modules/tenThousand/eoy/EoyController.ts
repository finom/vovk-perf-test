import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoy")
export default class EoyController {
  @operation({
    summary: "Get Eoy",
  })
  @get()
  static getEoy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoy",
  })
  @post("{id}")
  static createEoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
