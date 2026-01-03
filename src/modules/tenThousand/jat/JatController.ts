import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jats")
export default class JatController {
  @operation({
    summary: "Get Jats",
  })
  @get()
  static getJats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jat",
  })
  @post("{id}")
  static createJat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
