import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsbs")
export default class GsbController {
  @operation({
    summary: "Get Gsbs",
  })
  @get()
  static getGsbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsb",
  })
  @post("{id}")
  static createGsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
