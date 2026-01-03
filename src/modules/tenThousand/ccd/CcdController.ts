import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccds")
export default class CcdController {
  @operation({
    summary: "Get Ccds",
  })
  @get()
  static getCcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccd",
  })
  @post("{id}")
  static createCcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
