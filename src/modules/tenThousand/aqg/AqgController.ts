import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqgs")
export default class AqgController {
  @operation({
    summary: "Get Aqgs",
  })
  @get()
  static getAqgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqg",
  })
  @post("{id}")
  static createAqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
