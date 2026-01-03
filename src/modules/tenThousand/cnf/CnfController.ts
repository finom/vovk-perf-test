import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnfs")
export default class CnfController {
  @operation({
    summary: "Get Cnfs",
  })
  @get()
  static getCnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnf",
  })
  @post("{id}")
  static createCnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
