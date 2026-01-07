import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gko")
export default class GkoController {
  @operation({
    summary: "Get Gko",
  })
  @get()
  static getGko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gko",
  })
  @post("{id}")
  static createGko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
