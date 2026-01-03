import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geds")
export default class GedController {
  @operation({
    summary: "Get Geds",
  })
  @get()
  static getGeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ged",
  })
  @post("{id}")
  static createGed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
