import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gng")
export default class GngController {
  @operation({
    summary: "Get Gng",
  })
  @get()
  static getGng = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gng",
  })
  @post("{id}")
  static createGng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
