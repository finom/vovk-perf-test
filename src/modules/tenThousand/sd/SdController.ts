import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sds")
export default class SdController {
  @operation({
    summary: "Get Sds",
  })
  @get()
  static getSds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sd",
  })
  @post("{id}")
  static createSd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
