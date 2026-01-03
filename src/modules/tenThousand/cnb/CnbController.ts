import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnbs")
export default class CnbController {
  @operation({
    summary: "Get Cnbs",
  })
  @get()
  static getCnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnb",
  })
  @post("{id}")
  static createCnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
