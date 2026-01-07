import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imn")
export default class ImnController {
  @operation({
    summary: "Get Imn",
  })
  @get()
  static getImn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imn",
  })
  @post("{id}")
  static createImn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
