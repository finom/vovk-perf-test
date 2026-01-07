import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goy")
export default class GoyController {
  @operation({
    summary: "Get Goy",
  })
  @get()
  static getGoy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goy",
  })
  @post("{id}")
  static createGoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
