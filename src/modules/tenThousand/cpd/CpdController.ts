import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpd")
export default class CpdController {
  @operation({
    summary: "Get Cpd",
  })
  @get()
  static getCpd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpd",
  })
  @post("{id}")
  static createCpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
