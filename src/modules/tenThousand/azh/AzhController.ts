import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azh")
export default class AzhController {
  @operation({
    summary: "Get Azh",
  })
  @get()
  static getAzh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azh",
  })
  @post("{id}")
  static createAzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
