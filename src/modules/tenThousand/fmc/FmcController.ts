import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmcs")
export default class FmcController {
  @operation({
    summary: "Get Fmcs",
  })
  @get()
  static getFmcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmc",
  })
  @post("{id}")
  static createFmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
