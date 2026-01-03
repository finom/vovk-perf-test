import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cps")
export default class CpController {
  @operation({
    summary: "Get Cps",
  })
  @get()
  static getCps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cp",
  })
  @post("{id}")
  static createCp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
