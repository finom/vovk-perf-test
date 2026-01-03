import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grms")
export default class GrmController {
  @operation({
    summary: "Get Grms",
  })
  @get()
  static getGrms = procedure({
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
