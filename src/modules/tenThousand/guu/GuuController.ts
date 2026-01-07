import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guu")
export default class GuuController {
  @operation({
    summary: "Get Guu",
  })
  @get()
  static getGuu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guu",
  })
  @post("{id}")
  static createGuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
