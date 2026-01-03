import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csus")
export default class CsuController {
  @operation({
    summary: "Get Csus",
  })
  @get()
  static getCsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csu",
  })
  @post("{id}")
  static createCsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
