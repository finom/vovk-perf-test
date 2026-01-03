import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbhs")
export default class CbhController {
  @operation({
    summary: "Get Cbhs",
  })
  @get()
  static getCbhs = procedure({
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
