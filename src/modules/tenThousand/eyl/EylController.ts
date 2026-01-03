import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyls")
export default class EylController {
  @operation({
    summary: "Get Eyls",
  })
  @get()
  static getEyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyl",
  })
  @post("{id}")
  static createEyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
