import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqi")
export default class GqiController {
  @operation({
    summary: "Get Gqi",
  })
  @get()
  static getGqi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqi",
  })
  @post("{id}")
  static createGqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
