import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gacs")
export default class GacController {
  @operation({
    summary: "Get Gacs",
  })
  @get()
  static getGacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gac",
  })
  @post("{id}")
  static createGac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
