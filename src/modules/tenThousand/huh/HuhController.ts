import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huh")
export default class HuhController {
  @operation({
    summary: "Get Huh",
  })
  @get()
  static getHuh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huh",
  })
  @post("{id}")
  static createHuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
