import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnq")
export default class CnqController {
  @operation({
    summary: "Get Cnq",
  })
  @get()
  static getCnq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnq",
  })
  @post("{id}")
  static createCnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
