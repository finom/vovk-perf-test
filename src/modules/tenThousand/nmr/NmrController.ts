import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmrs")
export default class NmrController {
  @operation({
    summary: "Get Nmrs",
  })
  @get()
  static getNmrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmr",
  })
  @post("{id}")
  static createNmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
