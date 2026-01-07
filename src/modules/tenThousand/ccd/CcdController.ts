import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccd")
export default class CcdController {
  @operation({
    summary: "Get Ccd",
  })
  @get()
  static getCcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccd",
  })
  @post("{id}")
  static createCcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
