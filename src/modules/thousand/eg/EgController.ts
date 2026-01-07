import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eg")
export default class EgController {
  @operation({
    summary: "Get Eg",
  })
  @get()
  static getEg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eg",
  })
  @post("{id}")
  static createEg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
