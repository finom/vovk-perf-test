import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnr")
export default class NnrController {
  @operation({
    summary: "Get Nnr",
  })
  @get()
  static getNnr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnr",
  })
  @post("{id}")
  static createNnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
