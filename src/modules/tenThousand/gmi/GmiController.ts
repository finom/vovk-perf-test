import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmis")
export default class GmiController {
  @operation({
    summary: "Get Gmis",
  })
  @get()
  static getGmis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmi",
  })
  @post("{id}")
  static createGmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
