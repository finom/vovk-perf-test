import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eds")
export default class EdController {
  @operation({
    summary: "Get Eds",
  })
  @get()
  static getEds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ed",
  })
  @post("{id}")
  static createEd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
