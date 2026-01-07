import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifl")
export default class IflController {
  @operation({
    summary: "Get Ifl",
  })
  @get()
  static getIfl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifl",
  })
  @post("{id}")
  static createIfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
