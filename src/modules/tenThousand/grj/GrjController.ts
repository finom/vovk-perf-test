import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grjs")
export default class GrjController {
  @operation({
    summary: "Get Grjs",
  })
  @get()
  static getGrjs = procedure({
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
