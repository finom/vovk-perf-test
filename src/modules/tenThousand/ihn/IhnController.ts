import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihns")
export default class IhnController {
  @operation({
    summary: "Get Ihns",
  })
  @get()
  static getIhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihn",
  })
  @post("{id}")
  static createIhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
