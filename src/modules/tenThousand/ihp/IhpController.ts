import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihps")
export default class IhpController {
  @operation({
    summary: "Get Ihps",
  })
  @get()
  static getIhps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihp",
  })
  @post("{id}")
  static createIhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
