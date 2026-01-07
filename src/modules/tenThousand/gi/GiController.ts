import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gi")
export default class GiController {
  @operation({
    summary: "Get Gi",
  })
  @get()
  static getGi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gi",
  })
  @post("{id}")
  static createGi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
