import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnms")
export default class CnmController {
  @operation({
    summary: "Get Cnms",
  })
  @get()
  static getCnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnm",
  })
  @post("{id}")
  static createCnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
