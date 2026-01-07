import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amh")
export default class AmhController {
  @operation({
    summary: "Get Amh",
  })
  @get()
  static getAmh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amh",
  })
  @post("{id}")
  static createAmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
