import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwt")
export default class CwtController {
  @operation({
    summary: "Get Cwt",
  })
  @get()
  static getCwt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwt",
  })
  @post("{id}")
  static createCwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
