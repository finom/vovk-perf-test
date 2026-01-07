import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihh")
export default class IhhController {
  @operation({
    summary: "Get Ihh",
  })
  @get()
  static getIhh = procedure({
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
