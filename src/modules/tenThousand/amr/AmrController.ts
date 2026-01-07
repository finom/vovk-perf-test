import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amr")
export default class AmrController {
  @operation({
    summary: "Get Amr",
  })
  @get()
  static getAmr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amr",
  })
  @post("{id}")
  static createAmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
