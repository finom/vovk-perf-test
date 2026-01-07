import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kel")
export default class KelController {
  @operation({
    summary: "Get Kel",
  })
  @get()
  static getKel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kel",
  })
  @post("{id}")
  static createKel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
