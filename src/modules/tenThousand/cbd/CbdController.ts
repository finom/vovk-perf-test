import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbds")
export default class CbdController {
  @operation({
    summary: "Get Cbds",
  })
  @get()
  static getCbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbd",
  })
  @post("{id}")
  static createCbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
