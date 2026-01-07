import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbw")
export default class CbwController {
  @operation({
    summary: "Get Cbw",
  })
  @get()
  static getCbw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbw",
  })
  @post("{id}")
  static createCbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
