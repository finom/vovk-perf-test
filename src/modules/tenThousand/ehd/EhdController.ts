import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehds")
export default class EhdController {
  @operation({
    summary: "Get Ehds",
  })
  @get()
  static getEhds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehd",
  })
  @post("{id}")
  static createEhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
