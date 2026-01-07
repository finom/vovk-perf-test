import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifi")
export default class IfiController {
  @operation({
    summary: "Get Ifi",
  })
  @get()
  static getIfi = procedure({
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
