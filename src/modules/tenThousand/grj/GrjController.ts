import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grj")
export default class GrjController {
  @operation({
    summary: "Get Grj",
  })
  @get()
  static getGrj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grj",
  })
  @post("{id}")
  static createGrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
