import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmus")
export default class BmuController {
  @operation({
    summary: "Get Bmus",
  })
  @get()
  static getBmus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmu",
  })
  @post("{id}")
  static createBmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
