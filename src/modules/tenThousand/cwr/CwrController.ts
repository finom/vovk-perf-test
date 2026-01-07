import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwr")
export default class CwrController {
  @operation({
    summary: "Get Cwr",
  })
  @get()
  static getCwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwr",
  })
  @post("{id}")
  static createCwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
