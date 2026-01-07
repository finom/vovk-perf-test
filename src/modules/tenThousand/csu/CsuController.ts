import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csu")
export default class CsuController {
  @operation({
    summary: "Get Csu",
  })
  @get()
  static getCsu = procedure({
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
