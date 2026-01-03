import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czis")
export default class CziController {
  @operation({
    summary: "Get Czis",
  })
  @get()
  static getCzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czi",
  })
  @post("{id}")
  static createCzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
