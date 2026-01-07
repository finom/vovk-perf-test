import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnc")
export default class CncController {
  @operation({
    summary: "Get Cnc",
  })
  @get()
  static getCnc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnc",
  })
  @post("{id}")
  static createCnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
