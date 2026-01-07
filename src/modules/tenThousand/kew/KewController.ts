import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kew")
export default class KewController {
  @operation({
    summary: "Get Kew",
  })
  @get()
  static getKew = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kew",
  })
  @post("{id}")
  static createKew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
