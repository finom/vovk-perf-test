import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grr")
export default class GrrController {
  @operation({
    summary: "Get Grr",
  })
  @get()
  static getGrr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grr",
  })
  @post("{id}")
  static createGrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
