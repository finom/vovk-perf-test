import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icgs")
export default class IcgController {
  @operation({
    summary: "Get Icgs",
  })
  @get()
  static getIcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icg",
  })
  @post("{id}")
  static createIcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
