import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icg")
export default class IcgController {
  @operation({
    summary: "Get Icg",
  })
  @get()
  static getIcg = procedure({
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
