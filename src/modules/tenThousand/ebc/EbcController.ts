import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebc")
export default class EbcController {
  @operation({
    summary: "Get Ebc",
  })
  @get()
  static getEbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebc",
  })
  @post("{id}")
  static createEbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
