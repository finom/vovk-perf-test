import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwt")
export default class FwtController {
  @operation({
    summary: "Get Fwt",
  })
  @get()
  static getFwt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwt",
  })
  @post("{id}")
  static createFwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
