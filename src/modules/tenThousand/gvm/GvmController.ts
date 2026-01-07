import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvm")
export default class GvmController {
  @operation({
    summary: "Get Gvm",
  })
  @get()
  static getGvm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvm",
  })
  @post("{id}")
  static createGvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
