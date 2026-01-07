import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyc")
export default class IycController {
  @operation({
    summary: "Get Iyc",
  })
  @get()
  static getIyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyc",
  })
  @post("{id}")
  static createIyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
