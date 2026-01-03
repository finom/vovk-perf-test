import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jses")
export default class JseController {
  @operation({
    summary: "Get Jses",
  })
  @get()
  static getJses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jse",
  })
  @post("{id}")
  static createJse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
