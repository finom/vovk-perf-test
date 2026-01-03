import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihhs")
export default class IhhController {
  @operation({
    summary: "Get Ihhs",
  })
  @get()
  static getIhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihh",
  })
  @post("{id}")
  static createIhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
