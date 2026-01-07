import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jic")
export default class JicController {
  @operation({
    summary: "Get Jic",
  })
  @get()
  static getJic = procedure({
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
