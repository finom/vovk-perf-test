import { procedure, prefix, get, post, operation } from "vovk";

@prefix("his")
export default class HisController {
  @operation({
    summary: "Get His",
  })
  @get()
  static getHis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create His",
  })
  @post("{id}")
  static createHis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
