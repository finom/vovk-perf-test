import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azn")
export default class AznController {
  @operation({
    summary: "Get Azn",
  })
  @get()
  static getAzn = procedure({
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
