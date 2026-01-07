import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ged")
export default class GedController {
  @operation({
    summary: "Get Ged",
  })
  @get()
  static getGed = procedure({
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
