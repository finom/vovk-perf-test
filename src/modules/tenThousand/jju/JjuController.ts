import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jju")
export default class JjuController {
  @operation({
    summary: "Get Jju",
  })
  @get()
  static getJju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jju",
  })
  @post("{id}")
  static createJju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
