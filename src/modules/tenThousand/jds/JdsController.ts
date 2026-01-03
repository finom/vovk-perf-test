import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jds")
export default class JdsController {
  @operation({
    summary: "Get Jds",
  })
  @get()
  static getJds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jds",
  })
  @post("{id}")
  static createJds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
