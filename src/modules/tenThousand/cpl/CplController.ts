import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpls")
export default class CplController {
  @operation({
    summary: "Get Cpls",
  })
  @get()
  static getCpls = procedure({
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
