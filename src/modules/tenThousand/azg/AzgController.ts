import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azg")
export default class AzgController {
  @operation({
    summary: "Get Azg",
  })
  @get()
  static getAzg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azg",
  })
  @post("{id}")
  static createAzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
