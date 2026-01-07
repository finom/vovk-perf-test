import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grm")
export default class GrmController {
  @operation({
    summary: "Get Grm",
  })
  @get()
  static getGrm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grm",
  })
  @post("{id}")
  static createGrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
