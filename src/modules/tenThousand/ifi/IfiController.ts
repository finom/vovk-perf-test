import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifis")
export default class IfiController {
  @operation({
    summary: "Get Ifis",
  })
  @get()
  static getIfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifi",
  })
  @post("{id}")
  static createIfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
