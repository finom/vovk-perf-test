import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azv")
export default class AzvController {
  @operation({
    summary: "Get Azv",
  })
  @get()
  static getAzv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azv",
  })
  @post("{id}")
  static createAzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
