import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jths")
export default class JthController {
  @operation({
    summary: "Get Jths",
  })
  @get()
  static getJths = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jth",
  })
  @post("{id}")
  static createJth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
