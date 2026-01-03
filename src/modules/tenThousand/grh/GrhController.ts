import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grhs")
export default class GrhController {
  @operation({
    summary: "Get Grhs",
  })
  @get()
  static getGrhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grh",
  })
  @post("{id}")
  static createGrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
