import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsw")
export default class GswController {
  @operation({
    summary: "Get Gsw",
  })
  @get()
  static getGsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsw",
  })
  @post("{id}")
  static createGsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
