import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hads")
export default class HadController {
  @operation({
    summary: "Get Hads",
  })
  @get()
  static getHads = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Had",
  })
  @post("{id}")
  static createHad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
