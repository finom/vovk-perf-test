import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsc")
export default class JscController {
  @operation({
    summary: "Get Jsc",
  })
  @get()
  static getJsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsc",
  })
  @post("{id}")
  static createJsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
