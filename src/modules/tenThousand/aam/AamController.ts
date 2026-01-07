import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aam")
export default class AamController {
  @operation({
    summary: "Get Aam",
  })
  @get()
  static getAam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aam",
  })
  @post("{id}")
  static createAam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
