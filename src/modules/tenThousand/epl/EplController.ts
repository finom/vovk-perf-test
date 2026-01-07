import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epl")
export default class EplController {
  @operation({
    summary: "Get Epl",
  })
  @get()
  static getEpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epl",
  })
  @post("{id}")
  static createEpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
