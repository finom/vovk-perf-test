import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmu")
export default class CmuController {
  @operation({
    summary: "Get Cmu",
  })
  @get()
  static getCmu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmu",
  })
  @post("{id}")
  static createCmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
