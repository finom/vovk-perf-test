import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqm")
export default class AqmController {
  @operation({
    summary: "Get Aqm",
  })
  @get()
  static getAqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqm",
  })
  @post("{id}")
  static createAqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
