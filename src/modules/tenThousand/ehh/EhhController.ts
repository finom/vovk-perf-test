import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehh")
export default class EhhController {
  @operation({
    summary: "Get Ehh",
  })
  @get()
  static getEhh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehh",
  })
  @post("{id}")
  static createEhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
