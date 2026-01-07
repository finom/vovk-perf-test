import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpl")
export default class CplController {
  @operation({
    summary: "Get Cpl",
  })
  @get()
  static getCpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpl",
  })
  @post("{id}")
  static createCpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
