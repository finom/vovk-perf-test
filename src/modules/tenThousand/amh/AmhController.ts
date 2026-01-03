import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amhs")
export default class AmhController {
  @operation({
    summary: "Get Amhs",
  })
  @get()
  static getAmhs = procedure({
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
