import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnds")
export default class HndController {
  @operation({
    summary: "Get Hnds",
  })
  @get()
  static getHnds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnd",
  })
  @post("{id}")
  static createHnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
