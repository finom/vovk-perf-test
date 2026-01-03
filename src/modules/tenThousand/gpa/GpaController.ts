import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpas")
export default class GpaController {
  @operation({
    summary: "Get Gpas",
  })
  @get()
  static getGpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpa",
  })
  @post("{id}")
  static createGpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
