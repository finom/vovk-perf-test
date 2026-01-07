import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnm")
export default class CnmController {
  @operation({
    summary: "Get Cnm",
  })
  @get()
  static getCnm = procedure({
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
