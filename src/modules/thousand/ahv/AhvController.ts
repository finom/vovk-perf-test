import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahvs")
export default class AhvController {
  @operation({
    summary: "Get Ahvs",
  })
  @get()
  static getAhvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahv",
  })
  @post("{id}")
  static createAhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
