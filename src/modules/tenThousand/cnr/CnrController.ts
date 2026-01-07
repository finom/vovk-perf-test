import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnr")
export default class CnrController {
  @operation({
    summary: "Get Cnr",
  })
  @get()
  static getCnr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnr",
  })
  @post("{id}")
  static createCnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
