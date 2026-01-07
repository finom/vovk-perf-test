import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idd")
export default class IddController {
  @operation({
    summary: "Get Idd",
  })
  @get()
  static getIdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idd",
  })
  @post("{id}")
  static createIdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
