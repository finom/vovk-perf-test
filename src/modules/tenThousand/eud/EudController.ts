import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euds")
export default class EudController {
  @operation({
    summary: "Get Euds",
  })
  @get()
  static getEuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eud",
  })
  @post("{id}")
  static createEud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
