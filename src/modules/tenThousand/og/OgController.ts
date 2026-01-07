import { procedure, prefix, get, post, operation } from "vovk";

@prefix("og")
export default class OgController {
  @operation({
    summary: "Get Og",
  })
  @get()
  static getOg = procedure({
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
