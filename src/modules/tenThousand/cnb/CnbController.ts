import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnb")
export default class CnbController {
  @operation({
    summary: "Get Cnb",
  })
  @get()
  static getCnb = procedure({
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
