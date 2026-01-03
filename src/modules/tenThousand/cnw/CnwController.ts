import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnws")
export default class CnwController {
  @operation({
    summary: "Get Cnws",
  })
  @get()
  static getCnws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnw",
  })
  @post("{id}")
  static createCnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
