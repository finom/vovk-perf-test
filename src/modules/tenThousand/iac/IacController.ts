import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iac")
export default class IacController {
  @operation({
    summary: "Get Iac",
  })
  @get()
  static getIac = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iac",
  })
  @post("{id}")
  static createIac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
