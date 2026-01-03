import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euns")
export default class EunController {
  @operation({
    summary: "Get Euns",
  })
  @get()
  static getEuns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eun",
  })
  @post("{id}")
  static createEun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
