import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihgs")
export default class IhgController {
  @operation({
    summary: "Get Ihgs",
  })
  @get()
  static getIhgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihg",
  })
  @post("{id}")
  static createIhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
