import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biqs")
export default class BiqController {
  @operation({
    summary: "Get Biqs",
  })
  @get()
  static getBiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biq",
  })
  @post("{id}")
  static createBiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
