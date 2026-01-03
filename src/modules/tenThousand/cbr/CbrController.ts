import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbrs")
export default class CbrController {
  @operation({
    summary: "Get Cbrs",
  })
  @get()
  static getCbrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbr",
  })
  @post("{id}")
  static createCbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
