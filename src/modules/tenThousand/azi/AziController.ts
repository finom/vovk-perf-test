import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azis")
export default class AziController {
  @operation({
    summary: "Get Azis",
  })
  @get()
  static getAzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azi",
  })
  @post("{id}")
  static createAzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
