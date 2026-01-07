import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbh")
export default class CbhController {
  @operation({
    summary: "Get Cbh",
  })
  @get()
  static getCbh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbh",
  })
  @post("{id}")
  static createCbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
