import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azz")
export default class AzzController {
  @operation({
    summary: "Get Azz",
  })
  @get()
  static getAzz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azz",
  })
  @post("{id}")
  static createAzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
