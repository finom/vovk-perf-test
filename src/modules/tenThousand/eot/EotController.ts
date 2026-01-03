import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eots")
export default class EotController {
  @operation({
    summary: "Get Eots",
  })
  @get()
  static getEots = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eot",
  })
  @post("{id}")
  static createEot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
