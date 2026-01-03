import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrds")
export default class MrdController {
  @operation({
    summary: "Get Mrds",
  })
  @get()
  static getMrds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrd",
  })
  @post("{id}")
  static createMrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
