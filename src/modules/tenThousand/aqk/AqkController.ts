import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqks")
export default class AqkController {
  @operation({
    summary: "Get Aqks",
  })
  @get()
  static getAqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqk",
  })
  @post("{id}")
  static createAqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
