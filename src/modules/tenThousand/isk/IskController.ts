import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isk")
export default class IskController {
  @operation({
    summary: "Get Isk",
  })
  @get()
  static getIsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isk",
  })
  @post("{id}")
  static createIsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
