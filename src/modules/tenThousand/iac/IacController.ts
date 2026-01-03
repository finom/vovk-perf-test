import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iacs")
export default class IacController {
  @operation({
    summary: "Get Iacs",
  })
  @get()
  static getIacs = procedure({
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
