import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grn")
export default class GrnController {
  @operation({
    summary: "Get Grn",
  })
  @get()
  static getGrn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grn",
  })
  @post("{id}")
  static createGrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
