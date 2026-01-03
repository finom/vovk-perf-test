import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jics")
export default class JicController {
  @operation({
    summary: "Get Jics",
  })
  @get()
  static getJics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jic",
  })
  @post("{id}")
  static createJic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
