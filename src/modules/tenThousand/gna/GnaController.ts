import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gna")
export default class GnaController {
  @operation({
    summary: "Get Gna",
  })
  @get()
  static getGna = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gna",
  })
  @post("{id}")
  static createGna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
