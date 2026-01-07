import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cti")
export default class CtiController {
  @operation({
    summary: "Get Cti",
  })
  @get()
  static getCti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cti",
  })
  @post("{id}")
  static createCti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
