import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azns")
export default class AznController {
  @operation({
    summary: "Get Azns",
  })
  @get()
  static getAzns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azn",
  })
  @post("{id}")
  static createAzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
