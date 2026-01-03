import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnks")
export default class CnkController {
  @operation({
    summary: "Get Cnks",
  })
  @get()
  static getCnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnk",
  })
  @post("{id}")
  static createCnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
