import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efms")
export default class EfmController {
  @operation({
    summary: "Get Efms",
  })
  @get()
  static getEfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efm",
  })
  @post("{id}")
  static createEfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
