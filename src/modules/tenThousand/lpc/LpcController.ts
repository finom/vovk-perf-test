import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpc")
export default class LpcController {
  @operation({
    summary: "Get Lpc",
  })
  @get()
  static getLpc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpc",
  })
  @post("{id}")
  static createLpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
