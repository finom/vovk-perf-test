import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flls")
export default class FllController {
  @operation({
    summary: "Get Flls",
  })
  @get()
  static getFlls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fll",
  })
  @post("{id}")
  static createFll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
