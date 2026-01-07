import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsu")
export default class LsuController {
  @operation({
    summary: "Get Lsu",
  })
  @get()
  static getLsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsu",
  })
  @post("{id}")
  static createLsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
