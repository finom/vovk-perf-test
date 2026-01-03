import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffcs")
export default class FfcController {
  @operation({
    summary: "Get Ffcs",
  })
  @get()
  static getFfcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffc",
  })
  @post("{id}")
  static createFfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
