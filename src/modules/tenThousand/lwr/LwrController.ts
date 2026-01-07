import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwr")
export default class LwrController {
  @operation({
    summary: "Get Lwr",
  })
  @get()
  static getLwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwr",
  })
  @post("{id}")
  static createLwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
