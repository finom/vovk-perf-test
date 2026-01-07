import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isw")
export default class IswController {
  @operation({
    summary: "Get Isw",
  })
  @get()
  static getIsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isw",
  })
  @post("{id}")
  static createIsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
