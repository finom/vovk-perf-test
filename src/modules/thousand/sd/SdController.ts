import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sd")
export default class SdController {
  @operation({
    summary: "Get Sd",
  })
  @get()
  static getSd = procedure({
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
