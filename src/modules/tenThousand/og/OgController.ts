import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ogs")
export default class OgController {
  @operation({
    summary: "Get Ogs",
  })
  @get()
  static getOgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Og",
  })
  @post("{id}")
  static createOg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
