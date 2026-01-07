import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehd")
export default class EhdController {
  @operation({
    summary: "Get Ehd",
  })
  @get()
  static getEhd = procedure({
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
