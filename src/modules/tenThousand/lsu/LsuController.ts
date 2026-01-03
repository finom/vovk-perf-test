import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsus")
export default class LsuController {
  @operation({
    summary: "Get Lsus",
  })
  @get()
  static getLsus = procedure({
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
