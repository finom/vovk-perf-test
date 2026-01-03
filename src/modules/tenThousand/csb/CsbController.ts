import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csbs")
export default class CsbController {
  @operation({
    summary: "Get Csbs",
  })
  @get()
  static getCsbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csb",
  })
  @post("{id}")
  static createCsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
